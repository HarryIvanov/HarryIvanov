function solution () {
   let result = "";
   return {
    append (el) {
        result += el
    },
    removeStart(el) {
       result = result.slice(el);
    },
    removeEnd (el) {
        result = result.slice(0, -el)
    },
    print () {
        console.log(result);
    }
   }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
