// factorial



// Factorial of a non-negative integer is the multiplication of all positive integers smaller than or equal to n.
//  For example factorial of 6 is 6*5*4*3*2*1 which is 720.

// n! = n * (n – 1)*(n-2)*----*1


// recursive function
// factorial program using recursive functions. Until the value is not equal to zero, the recursive function will call itself. 

/*
function factorial(n) {
     if (n === 0 || n === 1) return 1;
     return n * factorial(n - 1);
   }
   
   const num = 5;
   console.log(`Factorial of ${num} is ${factorial(num)}`);
   */



// Iterative Solution to find factorial of a number:
//    Approach 1: Using For loop 

/*
function factorial(n) {
     let res = 1;
     for (let i = 2; i <= n; i++) 
     res *= i;
     return res;
   }
   
   const num = 5;
   console.log(`Factorial of ${num} is ${factorial(num)}`);


   */




//    2> using while loop
/*
function factorial(n) { 
     if (n == 0) 
          return 1; 
     let i = n, fact = 1; 
     while (Math.floor(n / i) != n) { 
       fact = fact * i; 
       i--; 
     } 
     return fact; 
   } 
   
   let num = 5; 
   console.log(`Factorial of ${num} is ${factorial(num)}`);
   */