import { expect } from '@wdio/globals'
import MultipleCheckboxPage from '../pageobjects/mcheckbox.page'

describe('Multiple Checkboxes Functionality', () => {

    beforeEach(async () => {
        await MultipleCheckboxPage.open()
    })

    it('should have exactly three checkboxes', async () => {
        const boxes = await MultipleCheckboxPage.checkboxes
        expect(boxes.length).toBe(3)
    })

    it('should have correct labels', async () => {

    const labels = await MultipleCheckboxPage.labels

    const texts: string[] = []

    for (const label of labels) {
        texts.push(await label.getText())
    }

    expect(texts).toEqual(['One', 'Two', 'Three'])
})

    it('submit button should always be enabled', async () => {
        await expect(MultipleCheckboxPage.submitButton).toBeEnabled()
    })

    it('should not display result if no checkbox is selected', async () => {
        await MultipleCheckboxPage.clickSubmit()

        const isDisplayed = await MultipleCheckboxPage.isResultDisplayed()
        expect(isDisplayed).toBe(false)
    })

    it('should display selected checkbox when one is selected', async () => {
        await MultipleCheckboxPage.selectCheckboxByIndex(0) // One
        await MultipleCheckboxPage.clickSubmit()

        await MultipleCheckboxPage.resultText.waitForDisplayed({ timeout: 10000 })

        const text = await MultipleCheckboxPage.getResultText()

        expect(text.toLowerCase()).toContain('one')
    })

    it('should display multiple selected checkboxes', async () => {
        await MultipleCheckboxPage.selectCheckboxByIndex(0) // One
        await MultipleCheckboxPage.selectCheckboxByIndex(2) // Three

        await MultipleCheckboxPage.clickSubmit()

        await MultipleCheckboxPage.resultText.waitForDisplayed({ timeout: 10000 })

        const text = await MultipleCheckboxPage.getResultText()
        const normalized = text.replace(/\s+/g, ' ').toLowerCase()

        expect(normalized).toContain('one')
        expect(normalized).toContain('three')
    })

})