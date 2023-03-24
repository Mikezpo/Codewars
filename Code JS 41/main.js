// Calculate average 

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function findAverage(array) {
    if (array == null || array.length === 0) {
      return 0;
    }
    
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        sum += array[i];
      }
    }
    
    return sum / array.length;
}

// ||

var findAverage = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

// ||

function findAverage(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
}