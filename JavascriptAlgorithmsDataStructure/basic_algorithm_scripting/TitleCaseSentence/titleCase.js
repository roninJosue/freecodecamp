const titleCase = (str) => str
  .toLowerCase()
  .replace(/(^|\s)\S/g, l => l.toUpperCase())

console.log(titleCase("I'm a little tea pot"))