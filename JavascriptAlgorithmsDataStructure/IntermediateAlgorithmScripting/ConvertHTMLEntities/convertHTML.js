const convertHTML = (str) => {
  const entities = {
    '&': "&amp;",
    '<': "&lt;",
    '>': "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  return str.split("")
    .reduce((html, letter) => entities[letter]
      ? html + entities[letter]
      : html + letter, "")
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"))