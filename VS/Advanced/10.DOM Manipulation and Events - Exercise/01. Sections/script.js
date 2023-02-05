function create(words) {
   let div = document.getElementById('content');
   
   for (const el of words) {
      let d = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = "none"
      p.textContent = el;
      d.appendChild(p);
      div.appendChild(d);
      d.addEventListener('click', () => {
        p.style.display = "inline"
      });
   }

   
   

}