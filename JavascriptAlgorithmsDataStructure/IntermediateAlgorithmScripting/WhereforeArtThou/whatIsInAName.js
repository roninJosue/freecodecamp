const whatIsInAName = (collection, source) => {
  const sourceKeys = Object.keys(source)
  return collection
    .filter(obj => sourceKeys.every(src => {
      return obj.hasOwnProperty(src) && obj[src] === source[src]
    }))
}

console.log(whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
  first: "Tybalt",
  last: "Capulet"
}], {last: "Capulet"}))