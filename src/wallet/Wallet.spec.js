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
        it('esta debe sumar el monto a nuestra cuenta', () => {
            expect(wallet.getBalance()).toEqual(40)
        })
    })
})