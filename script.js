/* 
# `21` Russian Roulette 

Have you ever played Russian Roulette? It's super fun! If you make it (wuuuahahahaha).

Revolvers can have 6 chambers for bullets. A single bullet is inserted into one of the chambers. 
The revolver chambers are spun to make the game random. Nobody knows the position of the bullet. 


## 📝 Instructions:

The game is almost working.

1. The `fireGun()` function needs to be completed to make the game work. It should compare 
the bullet position against the chamber position.

## 💡 Hints:

+ If the bullet position `firePosition` matches the chamber position given by the function 
`spinChamber`, the function `fireGun()` should return `You're dead!`.

+ If the bullet position `firePosition` doesn't match the chamber position given by the 
function `spinChamber`, the function `fireGun()` should return `Keep playing!`.

+ The function `spinChamber` returns a random number between 1 and 6.

*/

// firePosition will be the position in which the gun will fire.
let firePosition = 1;

// The output of spinChamber will be a number and it can be passed as a parameter to the fireGun function.
const spinChamber = () => {
  let chamberPosition = Math.floor(Math.random() * 6 + 1);
  return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (firePosition) => {
  for (var i = 1; i <= 6; i++) {
    if (i === firePosition) {
      return `You're dead!`;
    } else {
      return 'Keep playing!';
    }
  }
};

console.log(fireGun(spinChamber()));
