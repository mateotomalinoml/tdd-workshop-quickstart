export default class Wallet {
    constructor(balance) {
        this.balance = balance || 0;
    }

    getBalance() {
        return this.balance
    }
    add(transaction) {
        if (transaction.type === "CREDIT") {
            this.balance = this.balance + transaction.amount
        } else {
            const newBalance = this.balance - transaction.amount
            if (newBalance < 0) {
                throw new Error('insufficient balance')
            }
            this.balance = newBalance
        }
    }
}    