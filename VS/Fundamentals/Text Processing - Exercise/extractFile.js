function extractFile (str) {
    let newStr = str.split("\\")
    for (const el of newStr) {
        if(el.includes(".")) {
        let index = el.lastIndexOf(".")
        let finalEl = el.substring(0,index)
        let fileType = el.substring(index+1,el.length);
        console.log(`File name: ${finalEl}`);
        console.log(`File extension: ${fileType}`);

    }
}
}
extractFile ('C:\\Internal\\training-internal\\Template.bak.pptx')