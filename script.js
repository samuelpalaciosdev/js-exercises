const rapid = (string) => {
  let consonants = [];
  string = string.toLowerCase();

  for (let letter of string) {
    if (['a', 'e', 'i', 'o', 'u'].includes(letter) === false) {
      consonants.push(letter.toUpperCase());
    }
  }

  return consonants.join('');
};
// Work above this line; do not change code below
let str = 'John';
console.log(rapid(str));
