// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

const reverseOrder = (arr) => {
  return arr.reverse()
}
console.log(reverseOrder(originalArray));


// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"

const countLs = (string) => {
  let newArr = string.toLowerCase().split("")
  let count = 0
  let value = "l"
  for (let i = 0; i < newArr.length; i++) {
    if (value === newArr[i]) {
      count++
    }
  }
  return `The letter ${value} appears ${count} times in the string `
}

console.log(countLs(ourString));


// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibSquence = (num) => {

  let newArr = []
  let a = 0
  let b = 1
  let index = 1
  while (index < num){
    let sum = a + b
    newArr.push(sum)
    a = b
    b = sum
    index++
  }
  return newArr
}
console.log("changed the function so you can choose how many fib numbers you want to get" );
console.log("Showing the first 8 fib numbers "+fibSquence(8));
console.log("Showing the first 10 fib numbers "+fibSquence(10));


var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.
const oddChecker = (arr) => {
  return arr.filter( (e) => {
    let x = parseInt(e)
    console.log(x);
    if (typeof e !== "number") {
      return false
    } else {
      return x%2 === 0 ? false:true
    }
  })
}

console.log(oddChecker(fullArr));
