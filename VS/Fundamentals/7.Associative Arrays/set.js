
let set = new Set ([1,2,2,2,2,3,4,5]) // Ще върне саммо уникалните стойности.
console.log(set);
set.add(7) // добавяме елемент
console.log(set);
console.log(set.has(6));  //Връща true/false
    for (const el of set) {
        console.log(el);
    }
