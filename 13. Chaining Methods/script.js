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
    return this;
  }

  withdraw(val) {
    this.#movements.push(-val);
    return this;
  }

  // Private method
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Load approved of USD ${val}`);
    }
    return this;
  }
}

const acc1 = new Account('Ephraim', 'USD', 1111);
const movements = acc1
  .deposit(300)
  .deposit(300)
  .withdraw(100)
  .deposit(300)
  .withdraw(400)
  .withdraw(400)
  .requestLoan(50000)
  .withdraw(400)
  .withdraw(400)
  .getMovements();

console.log(movements);
