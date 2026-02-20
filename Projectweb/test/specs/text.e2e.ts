import { expect } from '@wdio/globals'
import TextFormPage from '../pageobjects/text.page'

describe('QA Practice Input Test', () => {

    beforeEach(async () => {
        await TextFormPage.open()
    })


    it('should submit valid text successfully', async () => {

        await TextFormPage.enterText('Hello123')
        await TextFormPage.submit()

        await TextFormPage.resultText.waitForDisplayed({ timeout: 10000 })

        const text = await TextFormPage.resultText.getText()

        expect(text).toContain('Hello123')
    })

})