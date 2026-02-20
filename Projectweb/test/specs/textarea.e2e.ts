import { expect } from '@wdio/globals'
import TextAreaPage from '../pageobjects/textarea.page'

describe('Text Area Field – Web Automation', () => {

    beforeEach(async () => {
        await TextAreaPage.open()
    })

    it('should have correct field label', async () => {
        const labelText = await TextAreaPage.label.getText()
        expect(labelText).toContain('Text area')
    })

    it('should not submit when text area is empty', async () => {
        await TextAreaPage.submit()

        const isDisplayed = await TextAreaPage.isResultDisplayed()
        expect(isDisplayed).toBe(false)
    })

    it('should display entered text after submission', async () => {

        const inputText = 'This is a sample text entered into text area.'

        await TextAreaPage.enterText(inputText)
        await TextAreaPage.submit()

        await TextAreaPage.resultText.waitForDisplayed()

        const result = await TextAreaPage.getResultText()
        expect(result).toContain(inputText)
    })

})