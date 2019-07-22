import Wallet from './Wallet'

describe('Wallet', () => {
    describe('cuando preguntamos por el saldo de la cuenta', () => {
        describe('y no tenemos dinero', () => {
            const wallet = new Wallet();
            it('retorna 0', () => {
                expect(wallet.getBalance()).toEqual(0)
            })
        })
        describe('y tenemos dinero', () => {
            const wallet = new Wallet(20);
            it('retorna el saldo actual', () => {
                expect(wallet.getBalance()).toEqual(20)
            })
        })
    })
    describe('cuando hacemos una transacción de credito', () => {
        const wallet = new Wallet(20)
        beforeAll(() => {
            const creditTransaction = { type: 'CREDIT', amount: 20 }
            wallet.add(creditTransaction)
        })
        it('aumenta el monto de la cuenta', () => {
            expect(wallet.getBalance()).toEqual(40)
        })
    })
    describe('cuando hacemos una transacion de debito', () => {
        describe('y nuestro saldo es suficiente', () => {
            const wallet = new Wallet(200)
            beforeAll(() => {
                const debitTransaction = { type: 'DEBIT', amount: 100 }
                wallet.add(debitTransaction)
            })
            it('se resta el monto de nuestra cuenta', () => {
                expect(wallet.getBalance()).toEqual(100)
            })
        })
        describe('y nuestro saldo no es suficiente', () => {
            const wallet = new Wallet(200)
            const debitTransaction = { type: 'DEBIT', amount: 999 }
            let addTransaction
            beforeAll(() => {
                addTransaction = () => wallet.add(debitTransaction);
            })
            it('no se resta el saldo de nuestra cuenta', () => {
                try {
                    addTransaction();
                } catch{
                    expect(wallet.getBalance()).toEqual(200)
                }
            })
            it('lanza una excepcion "insufficient balance"', () => {
                expect(addTransaction).toThrow('insufficient balance');
            })
        })
    })
})