// 1
// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     return innerFunction
// }
// const innerFunc = outerFunction() ;
// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())


// Q2:

// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init;
//     }
//     return count;
// }
// let c1 = createCounter(10, 5);  // i =10, d=5

// let c2 = createCounter(5, 2); // i =5, d=2

// console.log(c1())  // 15  -> i =15, d=5
// console.log(c2()) // 7 -> i =7, d=2

// console.log(c1()) // 20
// console.log(c2())  // 9 



// Q3: 
function outerfun() {
    let arr = [];
    
    for (let i = 0; i < 3; i++) {
        arr.push(function () { 
            console.log(i);
        })
    }
    return arr;
}

let arr = outerfun();
// calling
arr[0]();  // i from closure // 3 
arr[1](); //3
arr[2](); //3 