import {
    detectTouchDevice, detectWindowInnerSize
} from './utilities'

describe('utilities', () => {

    describe('detectTouchDevice', () => {

        it('should return false if typeof window is undefined or touch is unavailable', () => {
            expect(detectTouchDevice()).toEqual(false)
        })

        it('should return object with width and height if window is not undefined, or else return null', () => {
            if (typeof window === undefined) {
                expect(detectWindowInnerSize()).toEqual(null)
            } else {
                expect(detectWindowInnerSize()).toEqual(expect.objectContaining({
                    width: expect.any(Number),
                    height: expect.any(Number)
                }))
            }
        })
    })
})
