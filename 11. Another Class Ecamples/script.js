'use strict';
class Account {
  constructor(owner, currency, pin, movements) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for Opening and Account ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.movements.push(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Load approved of USD${val}`);
    }
  }
}

const acc1 = new Account('Ephraim', 'USD', 1111, []);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);
acc1.deposit(3000);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.pin);
