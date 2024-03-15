# Escapee Name Decoder Presentation

## Introduction

In the pursuit of justice, law enforcement often faces the challenge of decoding crucial information to identify and apprehend escaped prisoners. The "Escapee Name Decoder" is a JavaScript function designed to tackle this challenge head-on. By leveraging specific parameters such as the escapee's location, a string of numbers and letters, and a hint, this function provides a vital tool for law enforcement agencies to decipher the name of an escaped convict.

## Story

Imagine a scenario where a notorious criminal has escaped from custody, leaving behind only cryptic clues. The authorities are at a loss until they discover the Escapee Name Decoder. With its help, they are able to unravel the clues, piece together the escapee's identity, and swiftly move towards apprehension.

Consider a case where the escapee was last seen in "Manchester." Using the first and last letters of the location, "m" and "r," along with a string of numbers and letters like "ille," the function seamlessly deciphers the name to "Miller." This invaluable tool not only aids in identifying the escapee but also ensures swift action by law enforcement.

## Implementation

The implementation of the Escapee Name Decoder is straightforward yet powerful:

1. **Location Extraction:** Extract the first and last letters of the escapee's last known location.
   - Example: "Manchester" -> "m" and "r"

2. **String of Numbers and Letters:** Convert the provided string of numbers and letters into corresponding letters.
   - Example: "z111ab" -> "261 11 12" -> "ZAB"

3. **Hint Length:** Determine the length of the escapee's name based on the length of the hint.

4. **Name Decoding:** Capitalize the first letter of the decoded name and combine it with the letters extracted from the location.
   - Example: Location = "Manchester," String of Numbers and Letters result = "illeaw"
   - Final result: "Miller"
     - line 80 for more details of why "aw" was removed from string.

## Conclusion

The Escapee Name Decoder is not just a tool; it's a symbol of empowerment for law enforcement agencies. By providing a systematic approach to decoding escapee names, it streamlines the process of identifying and capturing criminals on the run. With this tool in their arsenal, law enforcement can stay one step ahead in the fight against crime.

Let's embrace this technology and empower our law enforcement agencies to uphold justice and ensure the safety of our communities.

Thank you.

**Note:** Have fun decoding! :)

---

# Escapee Name Decoder

## Introduction

This JavaScript function aims to decode the name of an escaped prisoner given specific parameters: `Location`, a `string of numbers and letters`, and a `Hint`.

This function decrypts the name of an escaped prisoner based on the provided `Location`, `String of Numbers and Letters`, and `Hint`, providing a crucial tool for law enforcement to identify and apprehend the escapee.

## Instructions

### For the `Location`

- Extract the first and last letter of the `Location`.
  - Example: "United Kingdom" -> "u" and "m"
  - Example: "Manchester" -> "m" and "r"

### For the `String of Numbers and Letters`

- Convert each letter to a corresponding number (A=1, B=2, ..., Z=26).
  - Example: "a111ab" -> "111112"
- Separate the numbers into pairs.
  - Example: "11 11 12"
  - Note: 
    - Every number will have a pair, so no need to handle single digits separately.
    - The test won`t try using the number 0 or negative numbers.
- Multiply the pairs.
  - Example: 1 * 1 = 1 | 1 * 1 = 1 | 1 * 2 = 2
  - Note:
    - The test won`t try pairs that exceed the result of 26 after multiplication.
- Convert the results back to letters.
  - Example: 1=A, 1=A, 2=B
  - Example result: "AAB"
- Another Example:
  - String = "z111ab" -> "261 11 12"
  - Extracted to pairs = 26 * 1 = 26 / 1 * 1 = 1 / 1 * 2 = 2
    - Example: 26=Z, 1=A, 2=B
    - Result = "ZAB"

### For the `Hint`

- Check the length of the hint to determine the length of the prisoner's name only.

## Implementation

- Use the first and last letters from the `Location`.
- Use the result from the `String of Numbers and Letters` to put the letters extracted from location around it.
  - Example: Location = "Manchester" -> "m", "r".
  - If Hint length is 6
    - using those 2 letters from the location you have only 4 letters left to fill it.
    - use the first 4 letters from String of Numbers and Letters result in thise case.
  - String of Numbers and Letters Ex: `result` = "illeaw"
  - First letter of the name to Capital.
  - Example return result: "Miller"
  - 
  - :) Have fun!!
  
---
