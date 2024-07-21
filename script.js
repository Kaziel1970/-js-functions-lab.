const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  console.log('Exercise 2 Result:', isAdult(21));
  function isAdult(age) {
    return age >= 18;

  } 

  console.log( 'Exercise 2 Result: ', isAdult(21));
  console.log('Exercise 3 Result:', isCharAVowel("a"));
  function isCharAVowel (char) {
    char = char.toLowerCase() ;
    return char === "a" || char === "e" || char === "i" || char === "o" || char === "u";
  }

  console.log('Exercise 3 Result: ', isCharAVowel("a"));
  console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
  function generateEmail(username, domain) {
    return ` ${username}@${domain} `;

  }
  console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
  console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
  function maxOfThree(a, b, c) {
    return Math.max(a, b, c);

 }

 console.log('Exercise 6 Result: ' , maxOfThree(5, 10, 8));
 const movies = ['Friday', 'Men In Black', 'Stray']
 



/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/



console.log('Exercise 7 Result:', calculateTip(50, 20));

function calculateTip(totalAmount, tipPercentage) {
  return (totalAmount * tipPercentage) / 100;

}

console.log( 'Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/



console.log('Exercise 8 Result:', convertTemperature(32, "C"));

function convertTemperature(temperature, scale) {
    if (scale === 'C') {
      // Convert Celsius to Fahrenheit
      return (temperature * 9/5) + 32;
    } else if (scale === 'F') {
      // Convert Fahrenheit to Celsius
      return (temperature - 32) * 5/9;
    } else {
      // Invalid scale provided
      return 'Invalid scale'
      
    

}

console.log('Exercise 8 Result:', convertTemperature(32, 'C')); // Should return 89.6
console.log('Exercise 8 Result:', convertTemperature(32, 'F')); // Should return 0
   

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/



console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

function basiccalculatoe(num1, num2, operation) {
    switch(operation) {
      case 'add':
        return num1 + num2;
      case 'suntract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        if (num2 === 0) {
            return 'Error: Division by zero';

        }
        return num1 / num2;
      default:
        return 'Invalid operation';

    }
        }
    }

    /*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/



console.log('Exercise 10 Result:', calculateGrade(85));


    
    

