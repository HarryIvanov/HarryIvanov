function main (first, second, third) {
    
    let sumFirstAndSecond = sum (first, second);
    let finalResult = substract (sumFirstAndSecond, third)

    
    
    function sum (first, second) {
        return first + second;
    }
    function substract (sumFirstAndSecond, third) {
        return sumFirstAndSecond - third
    }
    console.log(finalResult);
}
 main (23, 6, 10)