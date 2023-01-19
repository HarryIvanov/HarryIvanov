function sortAnArrayBy2Criteria (arr) {
    
    let result = arr.sort((a, b) => a.localeCompare(b));
    let sorted = result.sort((a, b) => a.length - b.length);

    for (const el of sorted) {
        console.log(el);
    }
} 
sortAnArrayBy2Criteria (['test', 
'Deny', 
'omen', 
'Default']


)



/*







*/