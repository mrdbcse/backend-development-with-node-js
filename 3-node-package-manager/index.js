const lodash = require("lodash");

const fruits = ["apple", "mango", "banana", "guava"];
const capitalize = lodash.map(fruits, lodash.capitalize);
const greet = "hello, world";

const capitalizeEachWords = (greet) => {
  const words = greet.split(" ");
  console.log(words);

  const sentence = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  console.log(sentence);

  return sentence.join(" ");
};

console.log(fruits);
console.log(capitalize);
console.log(fruits.map((fruit) => fruit.toUpperCase()));
console.log(
  fruits.map(
    (fruit) => fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase()
  )
);

console.log(capitalizeEachWords(greet));
