let cap = {
    name: "Steve",
    sayHi: function () {
        console.log(this==global);
        console.log("Hi from ", this.name);
    }
}
let ironMan={
    name:"tony"
}
//  method
// cap.sayHi();

let sayHiAdd = cap.sayHi.bind(ironMan);
//  function call
sayHiAdd();