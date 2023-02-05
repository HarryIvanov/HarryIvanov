function solve (input) {
    let methods = ["GET", "POST", "DELETE", "CONNECT"];
    let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let uriTemplate  = /^([\w.])+$|^\*/;
    let messageTemplate = /^[^<>\\&"']+$/;
    isOk = true;

    if (!input.hasOwnProperty("method")) {
        isOk = false;
    } else if (!input.hasOwnProperty("version")) {
        isOk = false;
    } else if (!input.hasOwnProperty("uri")) {
        isOk = false;
    } else if (!input.hasOwnProperty("message")) {
        isOk = false;
    }
    
    
    for (const key in input) {
        const command = key;
        const str = input[key];
        
        if (command == "method") {
            if (!methods.includes(str)) {
                throw new Error ("Invalid request header: Invalid Method");
                isOk = false;
            }
        }
        if (command == "version") {
            if (!versions.includes(str)) {
                throw new Error ("Invalid request header: Invalid Version");
                isOk = false;
            }
        }
        if (command == "uri") {
            let ok = str.match(uriTemplate);
            if (ok == null) {
                throw new Error ("Invalid request header: Invalid URI");
                isOk = false;
            }
        }
        if (command == "message") {
            let ok = str.match(messageTemplate);
            if (str == "") {
                continue
            } else if (ok == null) {
                throw new Error ("Invalid request header: Invalid Message");
                isOk = false;
            }
        } 
    }
    if (isOk) {
        return input 
    }
}
solve ({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}) ;
