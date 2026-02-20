import { $, browser } from '@wdio/globals'
import Page from './page'

class EmailPage extends Page {

    public get emailInput() {
        return $('#id_email')
    }

    public get resultText() {
        return $('#result-text')
    }

    open() {
        return super.open('elements/input/email')
    }

    async enterEmail(value: string) {
        await this.emailInput.waitForDisplayed({ timeout: 10000 })
        await this.emailInput.click()
        await this.emailInput.clearValue()
        await this.emailInput.setValue(value)
    }

    async submit() {
        await browser.keys('Enter')
    }

    async isResultDisplayed(): Promise<boolean> {
        return await this.resultText.isExisting()
    }
}

export default new EmailPage()