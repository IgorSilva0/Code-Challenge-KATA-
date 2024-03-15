export function nameDecoder(loc, code, hint) {
  const a = [...code]
    .map((item) =>
      !isNaN(item)
        ? parseFloat(item)
        : /^[a-zA-Z]$/.test(item)
        ? item.toUpperCase().charCodeAt(0) - 64
        : null
    )
    .filter((item) => item !== null);
  const pairs = [];
  for (let i = 0; i < a.length; i += 2) pairs.push([a[i], a[i + 1]]);
  for (let i = 0; i < pairs.length; i++)
    if (pairs[i].length === 2) pairs[i] = pairs[i][0] * pairs[i][1];
  const resultLetters = pairs
    .map((number) =>
      number >= 1 && number <= 26 ? String.fromCharCode(64 + number) : null
    )
    .filter((letter) => letter !== null);
  const result = resultLetters.slice(0, hint.length - 2);
  result.unshift(loc[0]);
  result.push(loc[loc.length - 1]);
  return result
    .join("")
    .toLowerCase()
    .replace(",", "")
    .replace(/^\w/, (c) => c.toUpperCase());
}
