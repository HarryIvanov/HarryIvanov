function arrayModifier (array) {
    let initial = array.shift().split(" ").map(Number);
               
    let index = 0;
    let command = array[index].split(" ")
    index++
        while (command !== 'end') {
            
            let [com, token1, token2] = command
            token1 = Number (token1);
            token2 = Number (token2);
            if (com == 'end') {
                break;
            }
            switch (com) {
                case "swap" : 
                let n1 = Number (initial[token1]);
                initial[token1] = Number (initial[token2]);
                initial[token2] = n1 ; break ;
                case "multiply":
                let n3 = Number (initial[token1]);
                let n4 = Number (initial[token2]);
                let sum = n3 * n4
                initial[token1] = sum; break ;
                case "decrease":
                let decr = initial.map(x => x-1);
                initial = decr; break ;
                default : break ;    
            }
            command = array[index].split(" ")
            index++
        }
        console.log(initial.join(", "));
}
arrayModifier (['23 -2 321 87 42 90 -123','swap 1 3','swap 3 6','swap 1 0','multiply 1 2','multiply 2 1','decrease','end'])