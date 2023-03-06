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