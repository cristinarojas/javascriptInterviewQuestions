// const - after the assign the value we can't asign the value again
const b = 1;
b = 2;
console.log(b); // TypeError: Assignment to constant variable.

const x;
console.log(x); // Missing initializer in const declaration

const c = [1, 2]; // We can add values in array and objects.
c.push(3);
console.log(c); // [1, 2, 3]

const c = [1, 2];
c = [1, 2, 3];
console.log(c); // TypeError: Assignment to constant variable.

// let - Would let me change the value before I asign a value.
let a = 1;
a = 2;
console.log(a); // 2
