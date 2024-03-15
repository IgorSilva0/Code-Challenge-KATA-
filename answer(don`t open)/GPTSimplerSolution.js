export function nameDecoder(loc, code, hint) {
  // Step 1: Convert code to numbers or letters
  const lettersToNumbers = (code) => {
    const result = [];
    for (const char of code) {
      if (!isNaN(char)) {
        result.push(parseFloat(char)); // Convert numbers to numbers
      } else {
        const uppercaseChar = char.toUpperCase();
        const charCode = uppercaseChar.charCodeAt(0) - 64;
        result.push(charCode); // Convert letters to corresponding numbers
      }
    }
    return result;
  };

  // Step 2: Group numbers into pairs
  const createPairs = (numbers) => {
    const pairs = [];
    for (let i = 0; i < numbers.length; i += 2) {
      const pair = [numbers[i]];
      if (i + 1 < numbers.length) {
        pair.push(numbers[i + 1]);
      }
      pairs.push(pair);
    }
    return pairs;
  };

  // Step 3: Multiply pairs if they have two elements
  const multiplyPairs = (pairs) => {
    const multipliedPairs = [];
    for (const pair of pairs) {
      if (pair.length === 2) {
        multipliedPairs.push(pair[0] * pair[1]);
      } else {
        multipliedPairs.push(pair[0]);
      }
    }
    return multipliedPairs;
  };

  // Step 4: Convert multiplied numbers back to letters
  const numbersToLetters = (multipliedPairs) => {
    const result = [];
    for (const num of multipliedPairs) {
      if (num >= 1 && num <= 26) {
        result.push(String.fromCharCode(64 + num)); // Convert numbers to letters
      }
    }
    return result;
  };

  // Step 5: Construct the result string
  const constructResult = (loc, resultLetters, hint) => {
    const result = [
      loc[0],
      ...resultLetters.slice(0, hint.length - 2),
      loc.slice(-1),
    ];
    return result
      .join("")
      .toLowerCase()
      .replace(",", "")
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  // Step 6: Putting it all together
  const numbers = lettersToNumbers(code);
  const pairs = createPairs(numbers);
  const multipliedPairs = multiplyPairs(pairs);
  const resultLetters = numbersToLetters(multipliedPairs);
  const finalResult = constructResult(loc, resultLetters, hint);

  return finalResult;
}
