const translatePigLatin = str => {
  const firstLetter = /^[aeiou]/.test(str)
  const consonants = str.match(/(^[^aeiou]+)/g)

  return firstLetter ?
    `${str}way` :
    `${str.replace(consonants, '')}${consonants}ay`
}

console.log(translatePigLatin('consonant'))