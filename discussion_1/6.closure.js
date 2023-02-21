function getFirstName(fName) {
    console.log("gfn exceuted");
    return function getlastName(lastName) {
        console.log("gln exceuted");
        return function printFullName() {
            // this should not work 
            console.log("Hi :) ", fName, lastName)
        }
    }
}
console.log("before");
const glnAddr = getFirstName("Jasbir");
console.log("b/w");
const pfnAddr = glnAddr("Singh");
pfnAddr();
// JS offers feature -> closure -> you will always have acces to parental scope

// a closure is created -> when memory is allocated for the concrened function


