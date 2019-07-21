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
            wallet.add(20)
        })
        it('aumenta el monto de la cuenta', () => {
            expect(wallet.getBalance()).toEqual(40)
        })
    })
})