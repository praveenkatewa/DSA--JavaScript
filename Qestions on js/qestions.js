//1)  write a js function that calculates the sum of all numbers from 1 to n ,where n is provided as an argument to the function.

// function numsum(n){
//   let sum=0;
//   for(let i=0;i<=n;i++){
//     sum=sum+i;
   
//   }
//   return sum;
// }
// console.log(numsum(5));

// ANS FOR ARRAY
// function sumUpTo(n) {
//   const numbers = [...Array(n)].map((_, i) => i + 1); 
//   return numbers.reduce((sum, num) => sum + num, 0); 
// }
// console.log(sumUpTo(5)); 



// Create an array with numbers from 1 to n

// let n = 5;
// let numbers = [];
// for (let i = 1; i <= n; i++) {
//   numbers.push(i); // Add numbers from 1 to n into the array
// }

// // Calculate the sum of all values in the array using a loop
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]; // Add each element to sum
// }

// console.log(sum); 



// 2) write a js function that counts how many even numbers are there from 1 to n where n is provided as an argument to the function

// function counts(n){
//   let even=0;
//   for(let i=0;i<=n;i++){
//     if(i%2==0){
//       even++;
//     }
//     console.log(even)
//   }
//   return even;
  
// }
// console.log(counts(5))


// 3)write a js function that accepts an array of numbers and return a new array where each element is multiplied by 2 using a for loop
// function arr(n){
//   let ar=[];
//   for(let i=1;i<=n.length;i++){
//     ar.push([i]*2);
//   }
//   return ar;
// }
// const num=[1,2,3,4,5];
// console.log(arr(num))

// 4) write a js function that takes a string as an argument and return the string reversed using a for loop

// function reverse(str){
//   let reversed='';
//   for(let i=str.length-1;i>=0;i--){
//     reversed=reversed+str[i];
//   }
//   return reversed;
// }
// console.log(reverse("praveen"));



// 5) write a js function that prints a simple number pattern, the function should accept a number n and print a pattern where each row contains numbers from 1 to the current row numbers.
// 1
// 12
// 123
// 1234

function printNumberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = ''; // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) {
      row += j + ' '; // Append numbers from 1 to the current row number
    }
    console.log(row.trim()); // Print the row, trimming any extra space at the end
  }
}



let n = 5; // Set the value of n

for (let i = 1; i <= n; i++) {
  let row = ''; // Initialize an empty string for each row
  for (let j = 1; j <= i; j++) {
    row += j + ' '; // Append numbers from 1 to the current row number
  }
  console.log(row.trim()); // Print the row, trimming any extra space at the end
}
