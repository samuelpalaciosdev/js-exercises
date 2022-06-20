/* 
  Print the numbers from 100 to 0 to the console with a While loop
*/

function startCounting() {
  let i = 100;

  // while loop from i = 1 to 5
  while (i >= 0) {
    console.log(i);
    i -= 1;
  }

  return i;
}

startCounting();
