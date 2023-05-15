const input = "Bobo wants to study at Chiangmai university";
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (vowels[j] === input[i]) {
      resultArray.push(input[i]);
      if (input[i] === "e") {
        resultArray.push(input[i]);
      } else if (input[i] === "u") {
        resultArray.push(input[i]);
      }
    }
  }
}

let resultString = resultArray.join('').toUpperCase();

console.log(resultString);
