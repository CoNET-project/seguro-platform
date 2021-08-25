import { fireEvent, render } from './testing'

describe('tests', () => {

    it('should re-export React Testing Library functions', () => {
        expect(typeof render).toEqual('function')
        expect(typeof fireEvent).toEqual('function')
    })
})
