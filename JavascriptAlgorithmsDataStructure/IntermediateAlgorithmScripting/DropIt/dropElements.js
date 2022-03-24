const dropElements = (arr, func) => {
  let cond = false
  return arr.filter(num=>{
    if (func(num)) cond = true
    return cond
  })
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))