// console.log(global);
var varName = 10;
function b() {
    // access of VarName
    console.log(varName);
}
function fn() {
    var varName = 20;
    b();
    console.log(varName);
}
fn();

//   Outer scope -> lexically scoped -> function defintion