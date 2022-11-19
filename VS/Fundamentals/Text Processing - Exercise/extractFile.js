function extractFile (str) {
    let fileName = str.split("\\").pop()
    
    let index = fileName.lastIndexOf(".")
    let finalEl = fileName.substring(0,index)
    let fileType = fileName.substring(index+1);
    
    console.log(`File extension: ${fileType}`);
    console.log(`File name: ${finalEl}`);

    
}
extractFile ('C:\\Internal\\training-internal\\Template.pptx')