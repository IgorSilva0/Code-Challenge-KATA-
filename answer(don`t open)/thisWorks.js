export function nameDecoder(loc, code, hint) {
  //first letter from location
  const locFirst = loc[0];
  //last letter from location
  const locLast = loc[loc.length - 1];
  //code to array
  const a = [...code];
  const pairs = [];
  // Function to convert a letter to its corresponding number
  function letterToNumber(letter) {
    const uppercaseLetter = letter.toUpperCase();
    return uppercaseLetter.charCodeAt(0) - 64;
  }

  // Function to convert the mixed array to an array containing only numbers
  function convertToNumbers(array) {
    return array
      .map((item) => {
        if (!isNaN(item)) {
          return parseFloat(item); // Convert numeric strings to numbers
        } else if (/^[a-zA-Z]$/.test(item)) {
          return letterToNumber(item); // Convert letters to corresponding numbers
        } else {
          return null; // Handle non-numeric, non-letter items (you may want to handle this differently depending on your use case)
        }
      })
      .filter((item) => item !== null); // Filter out null values
  }

  const numbersOnly = convertToNumbers(a);

  for (let i = 0; i < numbersOnly.length; i += 2) {
    if (i + 1 < numbersOnly.length) {
      pairs.push([numbersOnly[i], numbersOnly[i + 1]]);
    } else {
      pairs.push([numbersOnly[i]]);
    }
  }

  function multiplyPairsInPlace(pairsArray) {
    for (let i = 0; i < pairsArray.length; i++) {
      const pair = pairsArray[i];
      if (pair.length === 2) {
        pairsArray[i] = pair[0] * pair[1];
      }
    }
  }

  multiplyPairsInPlace(pairs);

  // Function to convert a number to a letter
  function numberToLetter(number) {
    return String.fromCharCode(64 + number);
  }

  // Function to convert the numeric result back into letters
  function convertToLetters(numbersArray) {
    return numbersArray
      .map((number) => {
        if (number >= 1 && number <= 26) {
          return numberToLetter(number);
        } else {
          return null; // Handle numbers outside the range [1, 26]
        }
      })
      .filter((letter) => letter !== null); // Filter out null values
  }

  const resultLetters = convertToLetters(pairs);

  let result = [];
  for (let i = 0; i < hint.length - 2; i++) {
    result.push(resultLetters[i]);
  }

  result.splice(0, 0, locFirst);
  result.splice(result.length, 0, locLast);

  let name = result.toString().replaceAll(",", "").toLowerCase();

  let DONE = name.charAt(0).toUpperCase() + name.slice(1);
  return DONE;
}
