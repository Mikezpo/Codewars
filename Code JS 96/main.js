// Find numbers which are divisible by given number

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example(Input1, Input2 --> Output)

// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]


function divisibleBy(nums, d){
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % d === 0) {
        arr.push(nums[i]);
      }
    }
    return arr;
}

// ||

function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
  }

// ||

const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));