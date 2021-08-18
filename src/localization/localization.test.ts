import { getLocaleGuess, getPreferredLocale } from './localization'

describe('localization', () => {

    describe('getLocaleGuess', () => {

        it('should return en-US for English language locales', () => {
            expect(getLocaleGuess('en')).toEqual('en-US')
            expect(getLocaleGuess('en-US')).toEqual('en-US')
            expect(getLocaleGuess('en-AU')).toEqual('en-US')
            expect(getLocaleGuess('en-CA')).toEqual('en-US')
            expect(getLocaleGuess('en-NZ')).toEqual('en-US')
            expect(getLocaleGuess('en-GB')).toEqual('en-US')
        })

        it('should return zh-CN for Chinese language locales', () => {
            expect(getLocaleGuess('zh')).toEqual('zh-CN')
            expect(getLocaleGuess('zh-CN')).toEqual('zh-CN')
            expect(getLocaleGuess('zh-HK')).toEqual('zh-CN')
            expect(getLocaleGuess('zh-MO')).toEqual('zh-CN')
            expect(getLocaleGuess('zh-SG')).toEqual('zh-CN')
            expect(getLocaleGuess('zh-TW')).toEqual('zh-CN')
        })

        it('should return undefined for unsupported language locales', () => {
            expect(getLocaleGuess('zu')).toEqual(undefined)
            expect(getLocaleGuess('yi')).toEqual(undefined)
            expect(getLocaleGuess('xh')).toEqual(undefined)
            expect(getLocaleGuess('cy')).toEqual(undefined)
            expect(getLocaleGuess('vi')).toEqual(undefined)
        })
    })

    describe('getPreferredLocale', () => {

        it('should return the supported locale that is most preferred', () => {
            expect(getPreferredLocale(['xh', 'en'])).toEqual('en-US')
            expect(getPreferredLocale(['zh', 'en'])).toEqual('zh-CN')
        })

        it('should return en-US if no supported locale is preferred', () => {
            expect(getPreferredLocale(['zu', 'yi', 'xh'])).toEqual('en-US')
            expect(getPreferredLocale([])).toEqual('en-US')
        })
    })
})
