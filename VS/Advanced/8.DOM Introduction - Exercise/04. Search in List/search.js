function search() {
   const text = document.getElementById("searchText").value;
   const searchList = Array.from(document.querySelectorAll("ul#towns li"));
   let matches = 0;

   for (const el of searchList) {
      el.style.fontWeight = ''
      el.style.textDecoration = 'none'
   }
   
   
   for (let el of searchList) {
      if (el.textContent.includes(text)) {
         matches++;
         el.style.fontWeight = 'bold'
         el.style.textDecoration = 'underline'
         
      }
   
}   
document.getElementById("result").textContent = `${matches} matches found`
   

}
