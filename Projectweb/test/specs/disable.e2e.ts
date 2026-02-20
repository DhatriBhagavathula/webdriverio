import { expect } from '@wdio/globals'
import DisabledButtonPage from '../pageobjects/disable.page'

describe('Disabled Button functionality', () => {

    beforeEach(async () => {
        await DisabledButtonPage.open()
    })

    it('Submit button should be disabled by default', async () => {

        await DisabledButtonPage.submitButton.waitForDisplayed()

        await expect(DisabledButtonPage.submitButton).toBeDisabled()
    })

    it('Should enable submit button when Enabled is selected', async () => {

        await DisabledButtonPage.selectOption('Enabled')

        await DisabledButtonPage.submitButton.waitForEnabled()

        await expect(DisabledButtonPage.submitButton).toBeEnabled()
    })

    it('Should disable submit button again when Disabled is selected', async () => {

        await DisabledButtonPage.selectOption('Enabled')
        await DisabledButtonPage.submitButton.waitForEnabled()

        await DisabledButtonPage.selectOption('Disabled')

        await DisabledButtonPage.submitButton.waitForDisplayed()

        await expect(DisabledButtonPage.submitButton).toBeDisabled()
    })

    it('Should show confirmation after clicking submit', async () => {

        await DisabledButtonPage.selectOption('Enabled')

        await DisabledButtonPage.clickSubmit()

        await DisabledButtonPage.resultText.waitForDisplayed({ timeout: 10000 })

        const text = await DisabledButtonPage.resultText.getText()

        expect(text).toBe('Submitted')
    })

})