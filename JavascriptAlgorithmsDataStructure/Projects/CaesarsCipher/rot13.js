const rot13 = (str) => {
  return str.split("").map((letter) => {
    let charCode = letter.charCodeAt(0);

    let cipherLetter = letter;
    if (charCode >= 65 && charCode <= 90) {

      let cipherCharCode = (charCode % 26) + 65;
      cipherLetter = String.fromCharCode(cipherCharCode);
    }

    return cipherLetter
  }).reduce((letter, current) => letter + current, '')
}

console.log(rot13("SERR YBIR?"));
