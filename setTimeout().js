// This are printing in the same time
console.log('a');
console.log('b');
console.log('c');


// With setTimeout(function() {}, time);
setTimeout(function() { // Asynchronous
  console.log('a');
}, 0); // even 0 this will be appear like b, c, a

console.log('b');
console.log('c');
