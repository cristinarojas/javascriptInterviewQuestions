console.log(funcDeclaration()); // Is available even if I call after the funcion declaration
console.log(functionExpression()); // undefined - Hoisting

// Function declaration
function funcDeclaration() {
  console.log('Function declaration');
}

// Function expression is anonymous function in a variable
let functionExpression = function() {
  console.log('Function expression');
}

------------------------
// Function declaration
function funcDeclaration() {
  console.log('Function declaration');
}
console.log(funcDeclaration()); // Is available even if I call before the funcion declaration

------------------------
console.log(funcDeclaration()); // Is available even if I call after the funcion declaration

// Function declaration
function funcDeclaration() {
  console.log('Function declaration');
}

// Function expression is anonymous function in a variable
let functionExpression = function() {
  console.log('Function expression');
}

console.log(functionExpression()); // Function expression
