import Wallet from './Wallet'

describe('Wallet', () => {
    describe('cuando preguntamos por el saldo de la cuenta', () => {
        const wallet = new Wallet(20)
        it('deberia retornar el saldo actual', () => {
            expect(wallet.getBalance()).toEqual(20)
        });
    })
    describe('cuando hacemos una transacion de credito', () => {
        const wallet = new Wallet(20)
        beforeAll(() => {
            const creditTransaction = { type: 'CREDIT', amount: 20 }
            wallet.add(creditTransaction)
        })
        it('esta debe sumar el monto de nuestra cuenta', () => {
            expect(wallet.getBalance()).toEqual(40)
        })
    })

    describe('cuando hacemos una transacion de debito', () => {
        describe('y nuestro saldo es suficiente', () => {
            const wallet = new Wallet(200)
            beforeAll(() => {
                const creditTransaction = { type: 'DEBIT', amount: 100 }
                wallet.add(creditTransaction)
            })
            it('se resta el monto de nuestra cuenta', () => {
                expect(wallet.getBalance()).toEqual(100)
            })
        })
        describe('y nuestro saldo no es suficiente', () => {
            const wallet = new Wallet(200)
            const creditTransaction = { type: 'DEBIT', amount: 999 }
            it('lanza una excepcion "saldo insuficiente"', () => {
                const addTransaction = () => wallet.add(creditTransaction);
                expect(addTransaction).toThrow('saldo insuficiente');
                expect(wallet.getBalance()).toEqual(200)
            })
        })
    })
})