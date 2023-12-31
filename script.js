// title: autocomplete.js
// type: js
// creation date: 11/7/2023
// modification date: date:12/30/23
// note: 
// programmer: Matthew Milam

const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function toObject(fruit) {
  var rv = {};
  for (var i = 0; i < fruit.length; ++i)
    if (fruit[i] !== undefined) rv[i] = fruit[i];

  return rv;
};

let newlist = toObject(fruit);

input.addEventListener("input", (e) => {
  suggestions.replaceChildren();
    let autocomplete = [];
    let inputbox = input.value;
  if (inputbox) {
    autocomplete = fruit.filter(function (keyword) {
      return keyword.toLowerCase().includes(inputbox.toLowerCase());
    });

    for (let i = 0; i < autocomplete.length; i++) {
      let answer = autocomplete[i];
      let useSuggestion = document.createElement("li");
      useSuggestion.addEventListener('click', function(e){
        const selectItem = e.target;
       clickautofill = selectItem.innerText;
       input.value = clickautofill;
      });
      useSuggestion.innerText = answer;
      suggestions.appendChild(useSuggestion);
    }
  }
});