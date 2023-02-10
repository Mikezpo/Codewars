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