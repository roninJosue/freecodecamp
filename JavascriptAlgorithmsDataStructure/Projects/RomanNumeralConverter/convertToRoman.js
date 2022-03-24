const romanToDecimal = [
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
const sizeArray = romanToDecimal.length;

const findLetter = (number) => {
  for (let index = 0; index < sizeArray; index++) {
    const element = romanToDecimal[index];
    if (element.decimal >= number) {
      return  element.decimal === number ? element : romanToDecimal[index - 1]
    }
  }

  return {
    ...romanToDecimal[sizeArray - 1],
  };
};

const convertToRoman = (number) => {
  let letter = findLetter(number);
  let roman = '';

  while (number > 0) {
    roman += letter.roman
    number -= letter.decimal
    letter = findLetter(number);
  }

  return roman
};

console.log(convertToRoman(45));
