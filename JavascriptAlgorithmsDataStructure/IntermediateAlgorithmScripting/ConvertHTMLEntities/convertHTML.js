const convertHTML = (str) => {
  const entities = {
    38: "&amp;",
    60: "&lt;",
    62: "&gt;",
    34: "&quot;",
    39: "&apos;"
  }

  return str.split("").reduce((html, letter) => {
    let charCode = letter.charCodeAt(0)
    return entities.hasOwnProperty(charCode) ? html + entities[charCode] : html + letter
  }, "")
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"))