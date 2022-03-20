const whatIsInAName = (collection, source) => {
  let sourceKeys = Object.keys(source)
  return collection.filter(obj => {
    return sourceKeys.every(src => Object.keys(obj).indexOf(src) > -1)
  }).filter(obj => {
    let test = sourceKeys.filter(key=>obj[key] === source[key])
    return test.length === sourceKeys.length
  })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))