'use strict';

class Account {
  // Public fields
  locale = navigator.language;
  bank = 'Bankist';

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for Opening and Account ${owner}`);
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.#movements.push(-val);
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Load approved of USD${val}`);
    }
  }

  // Private method
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Ephraim', 'USD', 1111, []);
acc1.deposit(300);
acc1.withdraw(100);
console.log(acc1.getMovements());
console.log(acc1);
