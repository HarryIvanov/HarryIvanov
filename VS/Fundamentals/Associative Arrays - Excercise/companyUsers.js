function companyUsers (input) {
    let companies = new Map ();

    for (const line of input) {
        let [company, userID] = line.split(" -> ")
        
        if (companies.has(company)) {
            companies.get(company).add(userID)
        } else {
            companies.set(company, new Set([userID]))
        }
    }
    let filtered = Array.from(companies).sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    });
    
    
    for (const [key, value] of filtered) {
        console.log(`${key}`);
        for (const el of value) {
            console.log(`-- ${el}`);
        }
    } 
}
companyUsers ([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])