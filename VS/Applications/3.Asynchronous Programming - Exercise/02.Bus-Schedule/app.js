function solve() {
    const arriveBtn = document.getElementById('arrive');
    const departBtn = document.getElementById('depart');
    const info = document.querySelector('#info span');
    let busStop = {
        next: 'depot'
    }
    


     async function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`
        let response = await fetch(url);
        if (response.status !== 200) {
            info.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
        busStop = await response.json();
        info.textContent = `Next stop ${busStop.name}`
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        
            
        
    }

    function arrive() {
            info.textContent = `Arriving at ${busStop.name}`;
            departBtn.disabled = false;
            arriveBtn.disabled = true;
        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();