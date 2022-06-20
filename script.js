const rapid = (string) => {
  let consonants = [];
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (['a', 'e', 'i', 'o', 'u'].includes(string[i]) === false) {
      consonants.push(string[i].toUpperCase());
    }
  }

  return consonants.join('');
};
// Work above this line; do not change code below
let str = 'John';
console.log(rapid(str));
