const factorialize = (num) => {
  if (num <= 1) return 1;

  return factorialize(num - 1) * num
}

console.log(factorialize(20))