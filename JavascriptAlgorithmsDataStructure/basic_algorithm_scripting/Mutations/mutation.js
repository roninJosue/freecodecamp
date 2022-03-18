const mutation = (arr) => {
  let [string1, string2] = arr.map(word => word.toLowerCase())
  return string2
    .split('')
    .every(s => string1
      .split('')
      .includes(s)
    )
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))