// Removing Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


function removeEveryOther(arr){

    let filt = [];  
    for (let i = 0; i < arr.length; i+=2) {
      filt.push(arr[i]);
    }
    return filt;
}

// ||

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
}

// ||

const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));