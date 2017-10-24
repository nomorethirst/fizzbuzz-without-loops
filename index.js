/*
 * FizzBuzz without for loops
 *
 * Contains two functions, 1 imperative and 1 functional style, that iterates
 * over a given range of numbers where start is inclusive and end is 
 * exlusive, and for each number prints:
 * "n: Fizz" where n is divisible by 3,
 * "n: Buzz" where n is divisible by 5, or
 * "n: FizzBuzz" where n is divisible by both.
 */

const fizzBuzzImperative = (start, end) => {
  while (start < end) {
    if (start % 3 === 0 && start % 5 === 0)
      console.log(`${start}: FizzBuzz`)
    else if (start % 3 === 0)
      console.log(`${start}: Fizz`)
    else if (start % 5 === 0)
      console.log(`${start}: Buzz`)
    start++
  }
}

console.log("fizzBuzzImperative(0,15):")
fizzBuzzImperative(0,15)

const _ = require('lodash')
const fizzBuzzFunctional = (start, end) => _
    .range(start, end)
    .filter(x => x % 3 === 0 || x % 5 === 0)
    .map(x => x % 15 === 0 ? `${x}: FizzBuzz` : x)
    .map(x => x % 3  === 0 ? `${x}: Fizz` : x)
    .map(x => x % 5  === 0 ? `${x}: Buzz` : x)
    .forEach(x => console.log(x))

console.log("\nfizzBuzzFunctional(0,15):")
fizzBuzzFunctional(0, 15)
