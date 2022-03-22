const pairElement = (str) => {
  const DNAPairs = [['A', 'T'], ['G', 'C']]
  return str.split('').map(item=>{
    return DNAPairs.reduce((acc, dna) => {
      if (dna.includes(item)){
        let i = dna.indexOf(item) === 0 ? 1 : 0
        return acc.concat(item, dna[i])
      }
      return acc.concat([])
    }, [])
  })
}

console.log(pairElement("ATCGA"))