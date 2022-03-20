const whatIsInAName = (collection, source) => {
  const sourceKeys = Object.keys(source)
  return collection
    .filter(obj => sourceKeys.every(src => Object.keys(obj).indexOf(src) > -1))
    .filter(obj => sourceKeys.filter(key => obj[key] === source[key]).length === sourceKeys.length)
}

console.log(whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
  first: "Tybalt",
  last: "Capulet"
}], {last: "Capulet"}))