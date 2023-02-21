// var a = 10;
// console.log("line number 2", a); 
// function fn() {
//     console.log("line number 4", a); 
//     var a = 20;
//     a++;
//     console.log("line number 7", a); 
//     if (a) {
//         var a = 30;
//         a++;
//         console.log("line number 11", a); 
//     }
//     console.log("line number 13", a);
// }
// fn();
// console.log("line number 2", a);

// var -> function scope
// var can be redecalred in the same scope

// var a=10;
// var a=20;
// a=30
// console.log("line number 2", a);


//  if you want to acess a var decalred using let/const before it's declaration -> you can't 
//  var -> Temporal Dead Zone
// console.log("a",a);
// let a;
// console.log("a",a);


// let a = 10;
// console.log("line number 2", a);
// function fn() {
//     console.log("line number 4", a);  // 4 
//     // let a = 20;
//     a++;
//     console.log("line number 7", a);
//     if (a) {
//         let a = 30;
//         a++;
//         console.log("line number 11", a);
//     }
//     console.log("line number 13", a);
// }
// fn();
// console.log("line number 2", a);


const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

const sym1=Symbol("d");
map1.set(sym1,"12345");
console.log("map",map1);