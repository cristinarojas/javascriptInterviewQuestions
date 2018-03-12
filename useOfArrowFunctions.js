const profile = {
  firstName:'',
  lastName: '',
  setName: function(name) {
    let splitName = function(n) {
      let nameArray = n.split(' ');
      this.firstName = nameArray[0];
      this.lastName = nameArray[1];
    }

    splitName(name);
  }
}

profile.setName('Cristina Rojas');
console.log(firstName); // Cristina
console.log(profile.firstName); // nothing
console.log(window.firstName); // Cristina


------------------------------------------------

// This is an example to use arrow functions
const profile = {
  firstName:'',
  lastName: '',
  setName: function(name) {
    let splitName = (n) => {
      let nameArray = n.split(' ');
      this.firstName = nameArray[0];
      this.lastName = nameArray[1];
    }

    splitName(name);
  }
}

profile.setName('Cristina Rojas');
console.log(profile.firstName); // Cristina
