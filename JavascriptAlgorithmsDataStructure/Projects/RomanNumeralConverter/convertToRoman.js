const convertToRoman = (n) => {
  let position = 1000

  const equivalenceRomanDecimalNumbers = [
    {roman: "I", decimal: 1},
    {roman: "IV", decimal: 4},
    {roman: "V", decimal: 5},
    {roman: "IX", decimal: 9},
    {roman: "X", decimal: 10},
    {roman: "XL", decimal: 40},
    {roman: "L", decimal: 50},
    {roman: "XC", decimal: 90},
    {roman: "C", decimal: 100},
    {roman: "CD", decimal: 400},
    {roman: "D", decimal: 500},
    {roman: "CM", decimal: 900},
    {roman: "M", decimal: 1000},
  ];

  const sizeArray = equivalenceRomanDecimalNumbers.length;

  const decomposeNumber = (number) => {
    let arrUnit = [];

    while (number !== 0) {
      let temp = parseInt(number / position);

      if (temp > 0) {
        temp *= position;
        arrUnit.push(temp);
      }

      position /= 10;
      number -= temp;
    }

    return arrUnit;
  };

  const createRomanNumber = (number) => {
    let letter = findLetter(number);
    let roman = '';

    while (number > 0) {
      roman += letter.roman
      number -= letter.decimal
      letter = findLetter(number);
    }

    return roman
  };

  const findLetter = (number) => {
    for (let index = 0; index < sizeArray; index++) {
      const element = equivalenceRomanDecimalNumbers[index];
      if (element.decimal >= number) {
        let tempIndex = element.decimal === number ? index : index - 1;
        return {
          ...equivalenceRomanDecimalNumbers[tempIndex],
          index: tempIndex,
        };
      }
    }

    return {
      ...equivalenceRomanDecimalNumbers[sizeArray - 1],
      index: sizeArray - 1,
    };
  };

  return decomposeNumber(n)
    .map(createRomanNumber).reduce((roman, current) => roman + current, '')
}

console.log(convertToRoman(45));
