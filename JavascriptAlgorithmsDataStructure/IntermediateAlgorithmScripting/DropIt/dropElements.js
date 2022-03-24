const dropElements = (arr, func) => {
  let cond = false
  return arr.filter(num=>{
    cond = func(num) ? true : cond
    return cond
  })
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))