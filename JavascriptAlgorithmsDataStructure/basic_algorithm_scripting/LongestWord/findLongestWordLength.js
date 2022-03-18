const findLongestWordLength = (str) => {
  let arrayWords = str.split(' ')
  let arraySize = arrayWords.length
  let longestLength = 0

  for (let index = 0; index < arraySize; index++){
    if (longestLength < arrayWords[index].length) longestLength = arrayWords[index].length
  }

  return longestLength
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))