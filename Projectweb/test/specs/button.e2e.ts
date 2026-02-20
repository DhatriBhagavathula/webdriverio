import { expect } from '@wdio/globals'
import ButtonPage from '../pageobjects/button.page'

describe('Button click functionality', () => {

    beforeEach(async () => {
        await ButtonPage.open()
    })

    it('should display button with label Click', async () => {

        await ButtonPage.submitButton.waitForDisplayed()

        const value = await ButtonPage.getButtonValue()

        expect(value).toBe('Click')
    })

    it('should show confirmation message after button click', async () => {

        await ButtonPage.clickButton()

        await ButtonPage.resultText.waitForDisplayed({ timeout: 10000 })

        const text = await ButtonPage.resultText.getText()

        expect(text).toBe('Submitted')
    })

})