/*
Encapsulation:
Implement a BankAccount class with a private balance property.
Add methods to deposit and withdraw money.*/

class BankAccount {
    constructor({
        id,
        balance
    }) {
        this.id = id;
        this._balance = balance;
    };

    depositMoney(money) {
        if (!money) return console.warn("You must enter a number");

        if (typeof money !== "number") return console.warn("You must enter a number");

        if (money > 1) {
            this._balance += money;
            return `Your balance is ${this._balance}$`;
        } else {
            return `You have not entered a valid value`;
        }
    }

    withdrawMoney(withdrawalAmount) {
        if (!withdrawalAmount) return console.warn("You must enter a number");

        if (typeof withdrawalAmount !== "number") return console.warn("You must enter a number");

        if (this._balance > withdrawalAmount) {
            this._balance -= withdrawalAmount;
            return `You have withdrawn ${withdrawalAmount} and you have ${this._balance}$ remaining in your account`;
        }
    }
}

const juan = new BankAccount({
    id: "2340",
    balance: 500
});

console.info(juan.depositMoney());
console.info(juan.depositMoney(100));
console.info(juan.depositMoney(100));

console.info("\n\n");
console.info(juan.withdrawMoney());
console.info(juan.withdrawMoney(100));
console.info(juan.withdrawMoney(200));