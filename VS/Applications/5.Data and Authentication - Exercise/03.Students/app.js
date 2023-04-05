
const url = 'http://localhost:3030/jsonstore/collections/students';
const table = document.querySelector('#results tbody');
const form = document.querySelector('form')

window.addEventListener('load', loadStudents);
form.addEventListener('submit', addStudents)

async function addStudents(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    table.replaceChildren()
    const infoArr = [...formData.values()];
    
    try {
        let grade = Number (infoArr[3].trim());
        const res = await fetch (url, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                firstName : infoArr[0],
                lastName: infoArr[1],
                facultyNumber: infoArr[2],
                grade: grade
            })
        })
        if (!res.ok) {
            const error = await res.json()
            throw new Error (error)
        }
    } catch (error) {
        alert(error.message)
    }
    loadStudents();
    e.target.reset()
}

async function loadStudents () {
    try {
        const res = await fetch (url);
        if (!res.ok) {
            const error = await res.json()
            throw new Error (error)
        }
        const data = await res.json();
        Object.values(data).forEach(e => {
            let student = createElement('tr', 
            createElement('td', e.firstName),
            createElement('td', e.lastName),
            createElement('td', e.facultyNumber),
            createElement('td', e.grade),
            )
            table.appendChild(student)
        })
      
        
        
    } catch (error) {
        alert(error.message)
    }
}
function createElement (type,...content) {
    let element = document.createElement(type);

    content.forEach(c => {
        if (typeof c === 'number' || typeof c === 'string') {
            c = document.createTextNode(c)
        }
        element.appendChild(c)
    })
    return element;
}

