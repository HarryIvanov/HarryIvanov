function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let text = document.getElementById("searchField");
   let rows = document.querySelectorAll("tbody tr");


   function onClick() {
      for (let el of rows ) {
         el.classList.remove('select');
         if (el.innerHTML.includes(text.value)) {
            el.className = 'select'
         }
      }
      

      
      text.value = "";


   }
}