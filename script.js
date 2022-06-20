/* 
Create a function called generateRandom(), which generates a 
pseudo-random number between 0 and 9 every time it is called.
*/

function generateRandom() {
  const randomNum = Math.floor(Math.random() * 10);
  return randomNum;
}
