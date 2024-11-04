var myName = "Khushi";

console.log(this.myName, "this");
console.log(this.myName, "self");

function printAge(){
    console.log("my age is 22");
}

console.log(this.printAge);
this.printAge();
self.printAge();
this.printAge;

let myAge = 10;
console.log(this.myAge);


function test(){
var A = -4;
console.log(this.A, "prints?", A);
}

test();
