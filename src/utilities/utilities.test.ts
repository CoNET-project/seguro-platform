import {
    getGreeting
} from './utilities'

describe('utilities', () => {

    describe('getGreeting', () => {

        it('should return a greeting to a specific name', () => {
            expect(getGreeting('Seguro')).toEqual('Hello, Seguro!')
        })
    })
})
