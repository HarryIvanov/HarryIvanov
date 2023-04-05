async function getInfo() {
    const element = document.getElementById('stopId');
    const stopId = element.value;
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');
    buses.innerHTML = ""
    


    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
    const response = await fetch(url);
    const data = await response.json();
    stopName.textContent = data.name;

    for (const el in data.buses) {
        let p = document.createElement('li');
        p.textContent = `Bus ${el} arrives in ${data.buses[el]} minutes`
        buses.appendChild(p);
    }
} catch {
    stopName.textContent = "Error"
}

}