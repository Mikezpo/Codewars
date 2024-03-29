// How good are you really?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!
// Note:

// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


function betterThanAverage(classPoints, yourPoints) {
    let averageScrore = classPoints.reduce((acc, c) => acc + c) / classPoints.length;
    if (yourPoints > averageScrore) {
      return true;
    }else if (yourPoints <= averageScrore){
      return false;
    }
}

// ||

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

// ||

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let classAvg = 0;
    for (let i = 0; i < classPoints.length; i++){
      classAvg += classPoints[i]; 
    }
    classAvg = classAvg/classPoints.length; 
    return yourPoints > classAvg;
}