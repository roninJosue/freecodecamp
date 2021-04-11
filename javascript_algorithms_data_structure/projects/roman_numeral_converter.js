let position = 1000;
let number = 700;
let roman = "";

const equivalenceRomanDecimalNumbers = [
  {
    roman: "I",
    decimal: 1,
  },
  {
    roman: "V",
    decimal: 5,
  },
  {
    roman: "X",
    decimal: 10,
  },
  {
    roman: "L",
    decimal: 50,
  },
  {
    roman: "C",
    decimal: 100,
  },
  {
    roman: "D",
    decimal: 500,
  },
  {
    roman: "M",
    decimal: 1000,
  },
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

const convertToRoman = (number) => {
  //console.log(number);

  let letter = findLetter(number);
  //console.log(letter);

  /**
   * Recursive function
   */
  const division = number / letter.decimal;
  const resto = number % letter.decimal;
  //let roman = "";

  //console.log(division, resto, ((resto / 10) > 3));

  if (resto / 10 > 3 && number > letter.decimal) {
    //console.log(letter.index + 1);
    letter = {
      ...equivalenceRomanDecimalNumbers[letter.index + 1],
      index: letter.index + 1,
    };
    //console.log(letter);
  }
  //console.log(letter)
  while (number >= 1) {
    //console.log(number, letter.decimal, letter.index);

    /**
     * Search for letter
     */
    console.log(`number: ${number}`);
    console.log(`letter.decimal: ${letter.decimal}`);
    if (letter.decimal < number) {
      number -= letter.decimal;
      console.log(number);
      roman += letter.roman;
      roman = roman.split("").reverse().join("");
      //roman = letter.roman + roman;

      if (number !== 1) {
        letter = {
          ...equivalenceRomanDecimalNumbers[
            letter.index + 1 < 0 ? 0 : letter.index + 1
          ],
          index: letter.index + 1 < 0 ? 0 : letter.index + 1,
        };
      }

      // console.log(letter);
    } else {
      console.log(letter);
      number -= letter.decimal;
      roman += letter.roman;
      letter = {
        ...equivalenceRomanDecimalNumbers[letter.index + 1],
        index: letter.index + 1,
      };
    }
    //number = -1;
  }
  console.log(roman);
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
    } /*else if(index === sizeArray - 1) {
            return equivalenceRomanDecimalNumbers[sizeArray - 1];
        }*/
  }

  return {
    ...equivalenceRomanDecimalNumbers[sizeArray - 1],
    index: sizeArray - 1,
  };
};

decomposeNumber(number).map(convertToRoman);

//console.log(decomposeNumber(number));
