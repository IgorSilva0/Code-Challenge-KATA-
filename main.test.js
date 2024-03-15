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

test("Random test should pass", () => {
  const locations = ["Brazil", "Manchester", "England", "Paris", "France"];
  const codes = [
    "3caicb",
    "cccdaw15ca",
    "1dau1a2ic1",
    "b4ealabhccaf",
    "ara1gbankaiabaab",
  ];
  const names = ["hell", "Idunno", "howiss", "maybeGG", "whoistes"];

  const randomIndex = Math.floor(Math.random() * locations.length);
  const location = locations[randomIndex];
  const code = codes[randomIndex];
  const name = names[randomIndex];

  let expected;
  switch (location) {
    case "Brazil":
      expected = "Biil";
      break;
    case "Manchester":
      expected = "Milwer";
      break;
    case "England":
      expected = "Eduard";
      break;
    case "Paris":
      expected = "Phelpis";
      break;
    case "France":
      expected = "Frannkie";
      break;
    default:
      expected = "Unknown";
      break;
  }
  expect(nameDecoder(location, code, name)).toBe(expected);
});

// To test your code make sure to use these commands on the console
// npm install
// npm test

describe("Country Names Test", function () {
  it("Should pass for all countries", () => {
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

    function generateName(country) {
      const firstLetter = country.charAt(0);
      const lastLetter = country.charAt(country.length - 1);
      return firstLetter.toUpperCase() + "ame" + lastLetter.toUpperCase();
    }

    for (const country of countries) {
      const name = generateName(country);
      Test.assertEquals(name, nameDecoder(country));
    }
  });
});
