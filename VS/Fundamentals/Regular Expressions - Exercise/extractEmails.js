function extractEmails (str) {
    let regExp = /(?<=\s)([a-z]+|\d+)(\d+|\w+|\.+|-+)([a-z]+|\d+)\@[a-z]+\-?[a-z]+\.[a-z]+(\.[a-z]+)?/g
    let line = str.split(" ")
    let matched = regExp.exec(str)

   while (matched !== null) {
    console.log(matched[0]);
    matched = regExp.exec(str)
   }
    
}
extractEmails ("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.")