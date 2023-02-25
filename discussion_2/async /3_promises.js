//  callbackHell ->
//  nesting of the callbacks
//  trust issues
//  promise  -> 
//  advantages of promises

//  creater 3party function ->  devloper 


// //  don't know 
// function thirdParty(data,cb){
// cb();

// }


// //  dev code 

// function devFn(){
//     console.log("Task is done");
// }


// thirdParty("Hello", devFn);
// console.log("next");


//  Promises

const fs = require("fs");
console.log("before");
// fs.readFile("./f1.txt", function (err, data) {
//     if (err) {
//         console.log("error", err);
//     } else {
//         console.log("data "+ data);
//     }
// })
const promise = fs.promises.readFile("./f1.txt");
console.log(promise);
// resolved
// promise.then(function(data){
//     console.log("data "+ data);
// });
// promise.catch(function(err){
// console.log("inside catch", err);
// })

(async function () {
    try {
        const data = await promise;
        console.log("result", data);
    } catch (err) {
        console.log("error", err);
    }
})()
console.log("After");

//  Why promises are better : 
    // * Promises cbs have higher priority  -> micro-task queue
    // * promise -> either be resolved or rejected only once

    //  async await -> syntax sugar for using then and catch
