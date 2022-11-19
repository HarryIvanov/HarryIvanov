function matchFullName (str) {
    let regExp = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/g
    let matches = str.match(regExp)
    
    
console.log(matches.join(" "));
    
    
    
}
matchFullName ("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")