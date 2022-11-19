let text = 'Haralampi Nikolaev Ivanov'
let index = text.indexOf('a') ;
while (index >= 0) {
    console.log(index);
    index = text.indexOf('a', index + 1) 
}


