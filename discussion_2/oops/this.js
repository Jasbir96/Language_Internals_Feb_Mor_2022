// "use strict";
// let cap = {
//     name: "Steve",
//     sayHi: function () {
//         console.log(this==global);
//         console.log("Hi from ", this.name);
//     }
// }
// //  method
// cap.sayHi();

// let sayHiAdd = cap.sayHi;
// //  function call
// sayHiAdd();

//  memory is allocated -> creation of EC
//  this is always determined at time  -> creation of EC
         // sees the call -> method call -> this -> current obj
         // sees the call -> normal call -> this -> global object

// let cap = {
//     name: "Steve",
//     sayHi: function () {
//         // console.log(this == global);
//         console.log("Hi from ", this.name);
//         function inner(){
//             console.log("Hi from ", this.name);
//         }
//         inner();
//     }
// }
// //  method
// cap.sayHi();

// let sayHiAdd = cap.sayHi;
// //  function call
// sayHiAdd();


// let cap = {
//     name: "Steve",
//     sayHi:  function() {
//         // console.log(this == global);
//         console.log("Hi from ", this.name);
//         function inner(){
//             console.log("Hi from ", this.name);
//         }
//         inner();
//     }
// }
// cap.sayHi();
// this.name="tony";
//  memory is allocated -> creation of EC
//  this is always determined at time  -> creation of EC
         // sees the call -> method call -> this -> current obj
         // sees the call -> normal call -> this -> global object
         // GEC this -> node -> {} / browser -> window
         // arrow function -> does not have it's own this it takes it 
        //  from outer scope

console.log(this);