import { expect } from '@wdio/globals'
import SingleSelectPage from '../pageobjects/select.page'

describe('Single Select Dropdown Functionality', () => {

    beforeEach(async () => {
        await SingleSelectPage.open()
    })

    it('should have correct field label', async () => {
        const text = await SingleSelectPage.label.getText()
        expect(text).toContain('Choose language')
    })

    it('submit button should be enabled', async () => {
        await expect(SingleSelectPage.submitButton).toBeEnabled()
    })

    it('should not display result if nothing is selected', async () => {
        await SingleSelectPage.clickSubmit()

        const isDisplayed = await SingleSelectPage.isResultDisplayed()
        expect(isDisplayed).toBe(false)
    })

    it('should display correct result for all dropdown options', async () => {

        const options = await SingleSelectPage.options

        for (const option of options) {

            const value = await option.getText()

            if (!value || value.includes('---')) continue

            await SingleSelectPage.selectByText(value)
            await SingleSelectPage.clickSubmit()

            await SingleSelectPage.resultText.waitForDisplayed({ timeout: 10000 })

            const resultText = await SingleSelectPage.getResultText()

            expect(resultText).toContain(value)

            await SingleSelectPage.open()
        }
    })

})