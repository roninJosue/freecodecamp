const myReplace = (str, before, after) => {
  const regex = new RegExp(before)
  const firstLetterIsUpper = before.match(/^[A-Z]/)

  after = !!firstLetterIsUpper ?
    after.replace(/^[a-z]/, after[0].toUpperCase()) :
    after.toLowerCase()

  return str.replace(regex, after)
}

console.log(myReplace("I think we should look up there", "up", "Down"))