import { test, expect } from "vitest";
import { nameDecoder } from "./main.js";

test("The output should be Bill", () => {
  expect(nameDecoder("Brazil", "3cbfcb", "hell")).toBe("Bill");
});
test("The output should be Miller", () => {
  expect(nameDecoder("Manchester", "cccdbf15ca", "Idunno")).toBe("Miller");
});
test("The output should be Edward", () => {
  expect(nameDecoder("England", "1daw1a2ic1", "howiss")).toBe("Edward");
});
test("The output should be Phelps", () => {
  expect(nameDecoder("Paris", "b4ealabhaf", "maybeG")).toBe("Phelps");
});
test("The output should be Frankie", () => {
  expect(nameDecoder("France", "ara1gbkaiabaab", "whoiste")).toBe("Frankie");
});

test("Should pass random test", () => {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  function convertToPrinciple(name) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const letterToNumber = {};

    for (let i = 0; i < alphabet.length; i++) {
      const letter = alphabet[i];
      const position = i + 1;
      letterToNumber[letter] = position;
    }

    function letterToPair(letter) {
      const number = letterToNumber[letter];
      return "a" + number;
    }

    let result = "";
    for (let i = 0; i < name.length; i++) {
      const pair = letterToPair(name[i]);
      result += pair + " ";
    }
    return result.replace(/\s+/g, "");
  }

  const names = [
    "bah",
    "bad",
    "cab",
    "bag",
    "dab",
    "had",
    "big",
    "bed",
    "fib",
    "gab",
    "hid",
    "dig",
    "fig",
    "gig",
    "chef",
    "fade",
    "bade",
    "dice",
    "edge",
    "chad",
    "bach",
    "bead",
    "hedge",
    "each",
    "gaffe",
    "badge",
    "beige",
    "baggage",
    "haggadah",
    "facade",
    "gigged",
    "hibachi",
    "faced",
    "chief",
    "faih",
    "begged",
    "baffed",
    "chided",
    "befaced",
    "gigged",
    "baggage",
    "chaffed",
    "defaced",
    "badge",
    "bighead",
    "hedged",
    "fibbed",
    "cabbed",
    "haggaged",
    "decaf",
    "bead",
    "beg",
    "bide",
    "big",
    "biff",
    "chafe",
    "chef",
    "chide",
    "chiff",
    "babe",
    "face",
    "fade",
    "feed",
    "gaff",
    "gaga",
    "gaffe",
    "babe",
    "biff",
    "chaff",
    "chafe",
    "chef",
    "face",
    "fade",
    "beef",
    "bead",
    "bead",
    "fade",
    "gaff",
    "chef",
    "hedge",
    "gaga",
    "bag",
    "dab",
    "bed",
    "big",
    "fib",
  ];

  function generateName(country, name) {
    const firstLetter = country.charAt(0);
    const lastLetter = country.charAt(country.length - 1);
    return firstLetter.toUpperCase() + name + lastLetter;
  }

  for (let i = 1; i <= 100; i++) {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomName = Math.floor(Math.random() * names.length);

    const hintNumber = names[randomName].length + 2;
    let hint = [""];
    for (let j = 0; j < names[randomName].length + 2; j++) {
      hint.push("a");
    }
    const principle = convertToPrinciple(names[randomName]);
    const location = countries[randomIndex];
    const name = generateName(location, names[randomName]);
    expect(nameDecoder(location, principle, hint)).toEqual(name);
  }
});
