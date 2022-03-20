const translatePigLatin = str => {
  const firstLetter = /^[aeiou]/.test(str)

  if (firstLetter) return str += 'way'

  const consonants = str.match(/(^[^aeiou]+)/g)

  return str.replace(consonants, '').concat(...consonants, 'ay')
}

console.log(translatePigLatin('consonant'))