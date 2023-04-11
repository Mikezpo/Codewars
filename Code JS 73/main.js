// Twice as old

// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.



function twiceAsOld(dadYearsOld, sonYearsOld) {
  
    const twiceAge = sonYearsOld * 2;
    const yearsAgo = dadYearsOld - twiceAge;
    return Math.abs(yearsAgo);
}

// ||

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// ||

function twiceAsOld(a, b) {
    return a>2*b ? a-2*b : 2*b-a;
}