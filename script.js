/* 
A function called getColor has been written that returns a color based
on an integer between 1 and 4, inclusive. For any integer beyond this
range, the color black will be returned.

Scenario: You are a teacher in a 10-student classroom. You want to randomly 
assign ONE color (red, yellow, blue or green), to EACH student.

(just ONE color to EACH student)

Complete the function getAllStudentColors() so that it prints 10 
randomly selected colors, one per student.

You have 10 students, you need to loop 10 times.

Each time you loop, generate a random number between 1-4 using the *Math.floor() 
and Math.random() built-in functions which we learned about in previous exercises.

Within the loop, you must also call the getColor() function to pass the randomly
generated number (as an argument) to obtain and return a color.

Print the color to the console.
*/

function getColor(colorNumber = 0) {
  //make sure parameter is a number and not a string by converting the value to int:
  colorNumber = parseInt(colorNumber);
  switch (colorNumber) {
    case 1:
      return 'red';
      break;
    case 2:
      return 'yellow';
      break;
    case 3:
      return 'blue';
      break;
    case 4:
      return 'green';
      break;
    default:
      return 'black';
      break;
  }
}

function getAllStudentColors(n) {
  for (let i = 1; i <= n; i++) {
    const randomNum = Math.floor(Math.random() * 4) + 1;
    const color = getColor(randomNum);
    console.log(color);
  }
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);
