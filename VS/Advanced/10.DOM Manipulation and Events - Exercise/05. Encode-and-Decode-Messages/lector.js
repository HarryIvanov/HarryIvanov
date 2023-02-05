function encodeAndDecodeMessages() {
  const textAreas = document.querySelectorAll("textarea");
  const buttons = document.querySelectorAll("button");
  buttons[0].addEventListener("click", encode);
  buttons[1].addEventListener("click", decode);

  function encode() {
    const input = textAreas[0].value;
    let encoded = "";
    for (let i = 0; i < input.length; i++) {
      const element = input[i];
      encoded += String.fromCharCode(element.charCodeAt(0) + 1);
    }
    textAreas[1].value = encoded;
    textAreas[0].value = "";
  }

  function decode() {
    let decoded = "";
    const input = textAreas[1].value;
    for (let i = 0; i < input.length; i++) {
      const element = input[i];
      decoded += String.fromCharCode(element.charCodeAt(0) - 1);
    }
    textAreas[1].value = decoded;
  }
}
