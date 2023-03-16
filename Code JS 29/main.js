// Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


function maps(x){
    let y = x.map (number => number * 2);
     return y;
}

// ||

function maps(x){
    return x.map(n => n * 2);
}

// ||

maps = x => x.map(e => e * 2);