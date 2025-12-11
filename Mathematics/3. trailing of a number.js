


// 1>

/*
function czf(n) {
     let fact=1;
     for(let i =2;i<=n;i++)
          fact=fact*i;
     
     let rev=0;
     while(fact%10===0){
          rev++;
          fact=fact/10;
     }
     return rev;
}

const n=5;
console.log(czf(n)); 

*/


// 2>

// function czf(n) {
//      let rev=0;
//      for(let i=5;i<=n;i*5)
//           rev=rev+Math.floor(n/i);
//      return rev;
// }
// const n=251
// console.log(czf(n))

function findTrailingZeros(n) {
     if (n < 0) return -1;
   
     let count = 0;
   
     for (let i = 5; n / i >= 1; i *= 5) {
       count += Math.floor(n / i);
     }
   
     return count;
   }
   
   const n = 100;
   console.log(`Count of trailing 0s in ${n}! is ${findTrailingZeros(n)}`);
   