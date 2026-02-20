import { expect } from '@wdio/globals'
import CheckboxPage from '../pageobjects/checkbox.page'

describe('Single Checkbox Functionality', () => {

    beforeEach(async () => {
        await CheckboxPage.open()
    })

    it('should have exactly one checkbox', async () => {
        const checkboxes = await $$('input[type="checkbox"]')
        expect(checkboxes.length).toBe(1)
    })

    it('should have correct label text', async () => {
        const text = await CheckboxPage.label.getText()
        expect(text).toBe('Select me or not')
    })

    it('submit button should always be enabled', async () => {
        await expect(CheckboxPage.submitButton).toBeEnabled()
    })

    it('should not display result if checkbox is not selected', async () => {
        await CheckboxPage.clickSubmit()

        const isDisplayed = await CheckboxPage.isResultDisplayed()
        expect(isDisplayed).toBe(false)
    })

    it('should display result if checkbox is selected', async () => {
        await CheckboxPage.selectCheckbox()
        await CheckboxPage.clickSubmit()

        await CheckboxPage.resultText.waitForDisplayed({ timeout: 10000 })

        const text = await CheckboxPage.resultText.getText()

        // Normalize text (case + whitespace safe)
        const normalizedText = text.replace(/\s+/g, ' ').toLowerCase()

        expect(normalizedText).toContain('select me or not')
    })

})