export default class Wallet {
    constructor(balance) {
        this.balance = balance;
    }

    getBalance() {
        return this.balance
    }

    add(transaction) {
        this.balance = this.balance + transaction.amount
    }

}