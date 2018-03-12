// Prototypal Inheritance
// Every object have a property called prototype where you can add properties and methods.
// When you create new object from the parent

// PARENT OBJECT
let car = function(model) {
  this.model = model;
}

// PARENT the object have prototype property
// I's adding a method outside the parent object
car.prototype.getModel = function() {
  return this.model;
}

// Im creating NEW OBJECT from PARENT OBJECT
let toyota = new car('toyota');
console.log(toyota.getModel()); // this object are inheritance the outside parent object.

// Im creating NEW OBJECT from PARENT OBJECT
let nissan = new car('nissan');
console.log(nissan.getModel());
