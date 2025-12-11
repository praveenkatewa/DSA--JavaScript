// the given number is palindrome or not we will just reverse the digits of the given number 
// and check if the reverse of that number is equal to the original number or not .
//  If reverse of number is equal to that number than the number will be Palindrome else it will not a Palindrome.




function ispal(n){
let rev=0,temp=n;
while(temp!==0){
     let ld=temp%10;
     rev=rev*10 + ld;
     temp =Math.floor(temp/10)
}
return (rev==n);
}

const n=7007;
console.log(ispal(n))