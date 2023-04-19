

//! Factorial
//* 6!= 6 x 5 x 4 x 3 x 2 x 1 = 720

// n != n x (n-1) x (n-2) x (n-3) x ..... x 2 x 1

function factorial (n){
    let result = 1
    while (n > 1){
         // result = result * n;  
         result *= n
         n--;
    }
    return result
}
console.log(factorial(6));

const factorial = n =>{
    if(n<=1) return 1
    return n * factorial (n-1)
}
console.log(factorial(3));

/*
return 1
return 2 * factorial (1) --> 2
return 3 * factorial (2) --> 6
*/


const factorialUnaLinea = n =>(n<=1 ? 1: n*factorialUnaLinea(n-1))
console.log(factorialUnaLinea(6));