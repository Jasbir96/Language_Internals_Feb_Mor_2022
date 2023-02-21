//  is JS statically typed lang -> dynamically typed lang

// what is default of JS -> undefined
var a;
// console.log(a); // undefined

// function fn() {
//     console.log("HI i ran");
// }
// let rVal = fn();
// console.log("rval: ", rVal);
// // console.log(obj.key)



// different Types in JS 
// * Primitive Types: Number,Boolean,string,undefined, null 
// ES6 : BigInt,Symbol
// * Non-Primtive Types: arrays, objects ,functions
// ES6: map, set ,weakMap, weakSet

// console.log(5/2); -> 2.5



// BigInt : is used to store values greater than 2 pow 53

// let c =BigInt(1234567894567894567895678678789);
// let b=123456789456789678909n/3n;
// console.log(b);



//  Symbols 

// let obj = {
//     id: 123456,
//     value: "i am value",
// }

// console.log("id : ", obj.id, " value: ", obj.value);
// // 
// // obj.newId = 12345;
// obj.id=1234561090
// console.log("obj", obj);

//  it is used to create unique primtives 
// let sym1=Symbol("str1");
// let sym2=Symbol("str2");
// let sym3=Symbol("str2");

// console.log("sym1", sym1,"sym2",sym2,"str3", sym3);
// console.log(sym1== sym2);
// console.log(sym2==sym3)


// let obj = {
//     id: 123456,
//     value: "i am value",
// }

// let key=Symbol("id");
// obj[key]=1234567;


// let key2=Symbol("id");
// obj[key2] = 1234567;
// obj[key2]="shdvhsvdv";

// console.log(obj);









