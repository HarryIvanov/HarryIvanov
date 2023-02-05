function create(words) {
    let div = document.getElementById('content');
    
    words.forEach(element => {
        const el = document.createElement('div');
        const p = document.createElement('p');
        p.textContent = element;
        p.style.display = "none";
        el.appendChild(p);
        el.addEventListener('click', (event) => {
            event.target.querySelector('p').style.display = 'block'
        })
        div.appendChild(el);
    });
 
    
    
 
 }