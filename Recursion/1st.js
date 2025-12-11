// function call flow
function fun1() {
  console.log("fun1() called");
} 
function fun2() {
  console.log("before fun1()");
  fun1();
  console.log("after fun1()");
}
console.log("before fun2()");
fun2();
console.log("after fun2()");