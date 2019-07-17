import Wallet from './Wallet'

describe('Wallet', () => {
    describe('cuando preguntamos por el saldo de la cuenta', () => {
        const wallet = new Wallet(20)
        it('deberia retornar el saldo actual', () => {
            expect(wallet.getBalance()).toEqual(20)
        });
    })
})