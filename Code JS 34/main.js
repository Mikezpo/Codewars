// Opposites Attract

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


function lovefunc(flower1, flower2){
    // moment of truth
    let n = flower1;
    let y = flower2;
    
    if (n % 2 === 0 && y % 2 ==! 0 || n % 2 ==! 0 && y % 2 === 0){
      return true;
    } else {
      return false;
    }
}

// ||

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}

// ||

function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 === 1
}