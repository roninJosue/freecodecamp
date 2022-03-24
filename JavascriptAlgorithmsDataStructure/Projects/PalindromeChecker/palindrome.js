const palindrome = (str) => {
  const onlyLettersAndNumbers = str.replace(/([^A-Za-z1-9])/g, '').toLowerCase()
  return onlyLettersAndNumbers === onlyLettersAndNumbers
    .split('')
    .reverse()
    .join('')
}

console.log(palindrome("eye"))