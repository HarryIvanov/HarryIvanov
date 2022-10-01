function addAndRemove(array) {
  let newArr = [];
    
  for (let i = 0; i < array.length; i++) {
    let command = array[i];
    if (command == "add") {
        newArr.push(i + 1);
    }  if (command == "remove") {
        newArr.pop()
        
        
      }
    
  }
  if (newArr.length > 0) {
    console.log(newArr.join(" "));
  } else {
    console.log("Empty");
  }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
