'use strict';

// Getters and setters in objects
const account = {
  owner: 'Ephraim',
  movements: [200, 530, 120, 300],

  // getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // setter
  set latest(movement) {
    return this.movements.push(movement);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.latest);
console.log(account.movements);

// getters and setters in class
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const eph = new PersonCl('Ephraim S', 1988);
console.log(eph);
eph.calcAge();
eph.greet();

console.log(eph.age);
console.log(eph.fullName);

const walter = new PersonCl('Walter White', 1969);
console.log(walter.fullName);
