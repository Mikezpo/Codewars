// -->  Code challenge 1 <--

// Training JS #1: create your first JS function and print "Hello World!"
// In JavaScript, your code is running in a function, let us step by step complete your first JS function.
// Look at this example:

// --------keyword "function"
// |       ----your function name  
// |       |    ---if needed, some arguments will appear in parentheses
// |       |    |
// function myfunc(){  ---------your function code will starting with "{"
// //you should type your code here
// }----------------------------ending with "}"
// If we want to print some to the screen, maybe we can use Document.write() in the web, or use alert() pop your message, but Codewars did not support these methods, we should use console.log() in your function. see this example:

// function printWordToScreen(){
// var somewords="This is an example."
// console.log(somewords)
// }
// If we run this function, This is an example. will be seen on the screen. As you see, console.log() is an useful method. You will use it a lot!

// Task
// Please refer to two example above and write your first JS function.

function helloWorld() {
  let str = 'Hello World!'
  console.log(str)
}

// -->  Code challenge 2 <--

// Multiply
// This code does not execute properly. Try to figure out why.
// function multiply(a, b){
//   a * b
// }


multiply = function (a, b) {
  return a * b;
}

// ||

multiply = (a, b) => a * b;

// ||

function multiply(a, b){
  return a * b
}

// -->  Code challenge 3 <--

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// Example output:

// Hello, Mr. Spock

const sayHello = name => `Hello, ${name}`;

// ||

function sayHello (name) {
    return 'Hello, ' +  name;
  }

// ||

function sayHello(name) {
    return `Hello, ${name}`
  }

// -->  Code challenge 4 <--

// DESCRIPTION:
// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// Array's length > 2.

function toCsvText(array) {
  return array.join('\n');
}

// ||

const toCsvText = array => array.join('\n');

// ||

const toCsvText = array => array.map(row => row.join(',')).join('\n');

// -->  Code challenge 5 <--

// Square(n) Sum
// Sort numbers in an array (sorts numbers from lowest to highest)
// numbers.sort( function(x, y) {
//     return y - x;
// });

function squareSum(numbers){
  let sum = 0;
  numbers.forEach(number => {
    sum += number * number;
  })
  return sum;
}

// ||

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

// ||

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

// -->  Code challenge 6 <--

//  Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.
// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return(-number);
}

// ||

const opposite = number => -number;

// ||

function opposite(number) {
  return number * (-1);
}

// -->  Code challenge 7 <--

//  Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
      case '-':
          return value1 - value2;
      case '*':
          return value1 * value2;
      case '/':
          return value1 / value2;
      default:
          return 0;
  }
}

// ||

function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+': return value1 + value2;
      case '-': return value1 - value2;
      case '*': return value1 * value2;
      case '/': return value1 / value2;
      default: return 'Operation must be one of + - * /';
  }
}

// -->  Code challenge 8 <--

// Sum without highest and lowest number
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    let total = 0;
    for (let i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

// ||

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

// ||

function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}

// -->  Code challenge 9 <--

// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number%2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

// ||

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

// ||

const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';

// -->  Code challenge 10 <--

// Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}

// ||

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

// ||

let boolToWord = bool => bool ? 'Yes' : 'No';

// -->  Code challenge 11 <--

// Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):

// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  return num.toString();
}

// ||

function numberToString(num) {
  return String(num);
}

// ||

function numberToString(num) {
  return ''+num;
}

// -->  Code challenge 12 <--

// Reversed Strings
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  return str.split('').reverse().join('')
}

// ||

const solution = str => str.split('').reverse().join('');

// ||

const solution = s => [...s].reverse().join('')

// ||

function solution(s){
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

// -->  Code challenge 13 <--

// Return negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Notes

//     The number can be negative already, in which case no change is required.
//     Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  return -Math.abs(num);
}

// ||

function makeNegative(num) {
  return num < 0 ? num : -num;
}

// ||

function makeNegative(num) {
  if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}

// -->  Code challenge 14 <--

// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// ||

function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

// ||

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// ||

function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}

// -->  Code challenge 15 <--

// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
  let finalStr = str.substring(1, str.length-1);
  return finalStr;
}
console.log(removeChar('eloquent'));

// I must admit I took a longer route than expected, but I got the intended result in the end.

// ||

function removeChar(str) {
  return str.slice(1, -1);
}

// Loved this solution! I intend to use it from now on.

// ||

const removeChar = str => str.slice(1,-1)

// ||

function removeChar(str){
  return str.substring(1, str.length-1);
};

// -->  Code challenge 16 <--

// String repeat

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
  if (n < 0){
      return '';
  } else if (n === 1) {
      return s;
  }else {
      return s + repeatStr (n - 1, s);
  }
}
repeatStr(3, 'Hello')

// Even though I got the intended result, I took a much longer route. I have now seen other developer's solutions, and I learned a much simpler way to approach this challenge.

// ||

function repeatStr (n, s) {
  return s.repeat(n);
}

// This is a great simple and clean solution.

// ||

function repeatStr (n, s) {
  var str="";
  for(var i=0; i < n; i++)
    str+=s;
    return str;
}

// -->  Code challenge 17 <--

// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.
// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// ||

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  }
}

// ||

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0];
  }
}

// -->  Code challenge 18 <--

// Remove string spaces
// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.replace(/\s/g, '');
}

// ||

function noSpace(x){return x.split(' ').join('')}

// ||

function noSpace(x){
  var result = ""
  for(var index = 0; index < x.length; index++){
    if(x[index] !== " "){
      result += x[index];
    }
  }
  return result;
}

// -->  Code challenge 19 <--

// Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


function summation(num) {
  return num * (num + 1) / 2
}

// ||

let summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}

// ||

const summation = n => n * (n + 1) / 2;

// -->  Code challenge 20 <--

// Function 1 - hello world
// Make a simple function called greet that returns the most-famous "hello world!".
// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

function greet () {
  return "hello world!"
}

// ||

const greet = () => "hello world!";

// ||

function greet() {

  /*
  quu..__
   $$$b  `---.__
    "$$b        `--.                          ___.---uuudP
     `$$b           `.__.------.__     __.---'      $$$$"              .
       "$b          -'            `-.-'            $$$"              .'|
         ".                                       d$"             _.'  |
           `.   /                              ..."             .'     |
             `./                           ..::-'            _.'       |
              /                         .:::-'            .-'         .'
             :                          ::''\          _.'            |
            .' .-.             .-.           `.      .'               |
            : /'$$|           .@"$\           `.   .'              _.-'
           .'|$u$$|          |$$,$$|           |  <            _.-'
           | `:$$:'          :$$$$$:           `.  `.       .-'
           :                  `"--'             |    `-.     \
          :##.       ==             .###.       `.      `.    `\
          |##:                      :###:        |        >     >
     */return "hello world!";/*     |#'     `..'`..'          `###'        x:      /     /
           \                                   xXX|     /    ./
            \                                xXXX'|    /   ./
            /`-.                                  `.  /   /
           :    `-  ...........,                   | /  .'
           |         ``:::::::'       .            |<    `.
           |             ```          |           x| \ `.:``.
           |                         .'    /'   xXX|  `:`M`M':.
           |    |                    ;    /:' xXXX'|  -'MMMMM:'
           `.  .'                   :    /:'       |-'MMMM.-'
            |  |                   .'   /'        .'MMM.-'
            `'`'                   :  ,'          |MMM<
              |                     `'            |tbap\
               \                                  :MM.-'
                \                 |              .''
                 \.               `.            /
                  /     .:::::::.. :           /
                 |     .:::::::::::`.         /
                 |   .:::------------\       /
                /   .''               >::'  /
                `',:                 :    .'
                                      
  */
  
  }

// -->  Code challenge 21 <--

// Convert a string to a number

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// Examples

// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7


const stringToNumber = function(str){
  if (str) {
    return Number(str);
  }else{
    return null;
  }
}

// ||

var stringToNumber = function(str){
  return parseInt(str);
}

// ||

var stringToNumber = function(str){
  // put your code here
  return Number(str);
}

// -->  Code challenge 22 <--

// -->  Code challenge 23 <--

// -->  Code challenge 24 <--

// -->  Code challenge 25 <--

// -->  Code challenge 26 <--

// -->  Code challenge 27 <--

// -->  Code challenge 28 <--

// -->  Code challenge 29 <--

// -->  Code challenge 30 <--