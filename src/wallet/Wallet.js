export default class Wallet {
    constructor(balance) {
        this.balance = balance || 0;
    }

    getBalance() {
        return this.balance
    }
}    