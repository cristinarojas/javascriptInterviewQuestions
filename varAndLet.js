// var was introduced from the beggining - FUNCTION SCOPE - HOISTED
// let was introduced recently ES2015/ ES6 - BLOCK SCOPE - NO HOISTED

let x = function() {

  if(true) {
    var a = 2;
    let b = 1;
  }

  console.log(a); // 2 because have a function scope.
  console.log(b); // is not defined. not exist outside the if scope.
}
x();

------------------------
let x = function() {
  console.log(a); // undefined because is hoisted like var a; but has not value assigned.
  console.log(b); // is not defined. not exist outside the if scope.

  if(true) {
    var a = 2;
    let b = 1;
  }
}
x();
------------------------

let x = function() {
  console.log(a); // undefined because is hoisted like var a; but has not value assigned.
  console.log(b); // is not defined. - no hoisted but the let b is inside of the context

  if(true) {
    var a = 2;
  }

  let b = 1;
}
x();

-------------------------
let x = function() {
  console.log(a); // undefined because is hoisted like var a; but has not value assigned.


  if(true) {
    var a = 2;
  }

  let b = 1;
  console.log(b); // 1 because let b is in the context
}
x();
