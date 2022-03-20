const myReplace = (str, before, after) => {
  const regex = new RegExp(before)
  const firstLetterUpper = before.match(/^[A-Z]/)

  if (!!firstLetterUpper) {
    after = after.replace(/^[a-z]/, after[0].toUpperCase())
  } else {
    after = after.toLowerCase()
  }

  return str.replace(regex, after)
}

console.log(myReplace("I think we should look up there", "up", "Down"))