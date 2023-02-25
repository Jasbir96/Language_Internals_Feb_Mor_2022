// let a = true;
// console.log("Before");
// setTimeout(() => {
//     a = false;
//     console.log("I broke the while loop");
// }, 1000);
// console.log("After");

// while (a) {

// }

//  is js single threaded / nodejs single threaded -> single 
// how it can do multiple task at one -> event loop /async arch

//  every js code will execute on callstack
//  asynchronous function -> given by env
// async -> invoked on the cstack and they are excuted in APIs area 
// and as soon as there task completed it is send to waiting Queue
// and then event loop checks if the callStack is empty and as it get empty 
// It will now push that cb function to stack
//  Q2

console.log("Before");
const cb2 = () => {
    console.log("set timeout 2");
    while (1) {
    }
}
const cb1 = () => console.log("hello");
setTimeout(cb2, 1000)
setTimeout(cb1, 2000)

console.log("After");
