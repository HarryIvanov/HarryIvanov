function map (data) {
    let myMap = new Map ();
    myMap.set("name", "Harry") // сетваме key + value
    console.log(myMap);
    console.log(myMap.size); // показва колко елемента има в map.
    console.log(myMap.get("name")); // задаваме ключа, за да ни върне value
    console.log(myMap.has("name")); // Връща true/false ако имаме такъв ключ
    myMap.set("age", 30) // можем да добавяме допълнителни ключове и value
    // myMap.delete("name") - трие ключ и value
    // myMap.clear() - чисти целия map. 
    console.log(Array.from(myMap.keys())); // връща keys. Можем да го запазим като променлив масив с let и да итерираме.
}
map()