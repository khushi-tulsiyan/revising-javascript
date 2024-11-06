//HOISTING CONCEPT
/* Order of code execution of a JS file:
1. Compile Phase
2. Execution Phase

Compile phase: The file is scanned for variables and functions
and they are put being put in memory. We say that the functions and variables are being 'hoisted'

Execution Phase: After the compile phase, the code is executed top to bottom.

Hoisting happens on a global level and also inside the functions.*/


hello(); // The function is called before the definition
function hello(){ //JS will scan the file and know that the function hello exists and it'll execute the function top to bottom.
    console.log("Hello doofus");
}

//For variables, the declaration is hoisted but the definition is not.
console.log(myName);// output is undefined
var myName = 'Khushi';
console.log(myName);


//the declaration is hoisted and the variable myName holds value of undefined.
//the code is executed from top to bottom so variable myName logs with undefined 
// and then a value is assigned to it.


//guess the output!
console.log(greet); //undefined
try {
    greet();
}

catch(error){
    console.log(error); //catch block gets executed because greet is currently undefined and not a function
}

var greet = function() {
    console.log("hello");
}

greet(); // prints hello because now the definiton is also executed and greet is a function


console.log("this will print greet function now", greet);

//hoisting inside functions
function x (){
    console.log(myAge); //prints undefined
    var myAge = 22; // definition
    console.log(myAge); //prints 22
}

x();
