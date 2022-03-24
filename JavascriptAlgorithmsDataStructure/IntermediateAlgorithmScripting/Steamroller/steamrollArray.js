const steamrollArray = (array) => {
  let flat = [].concat(...array)
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat
}

steamrollArray([[["a"]], [["b"]]])
