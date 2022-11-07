function solve () {
    let text = "Harry Nikolaev"
    text += " Ivanov" // можем да добавяме по този начин, в края на стринга.
    console.log(text);
    let newText = "Hello, "
    let name = "Harry"
    let result = newText.concat(name + "!"); // можем да конкатенираме 2 текста.
    console.log(result);
    console.log(result.indexOf("H")); // Връща първия индекс на параметъра. 
    //Case sensitive е и връща -1 ако го няма този параметър. 
    //Ако зададем цяла дума, ще върне мястото на първия индекс от параметъра.
    console.log(result.lastIndexOf("H")); // Връща последния индекс на параметъра.
    console.log(result.substring(0, 5)); // връща текста с начален индекс 0 и краен индекс 5 вкл.
    //ако имаме отрицателна стойност, тя става на 0. Ако подадем само едно число ще върне от началния индекс до края.
   let replaced = result.replace("Harry", "Bibi")
    console.log(replaced); //не променя основния стринг. Трябва да го направим в променлива.
  //replace-ва само първия елемент.
  //.includes()
  //.split() - връща масив.
  console.log("*".repeat(result.length-1));
  //.trim() - маха празните спейсове в началото и края на стринга. Не пипа между думите.
  //.trimStart() - маха само в началото.
  //.trimEnd() - маха само в края.
  console.log(result.startsWith("Hello")); // проверява дали изречението започва с подадената дума. Case sensitive!
  console.log(result.endsWith("Harry")); // проверява дали изречението завършва --/--
    
}
solve ()