import { $, browser } from '@wdio/globals'
import Page from './page'

class PasswordPage extends Page {

    public get passwordInput() {
        return $('#id_password')
    }

    public get resultText() {
        return $('#result-text')
    }

    open() {
        return super.open('elements/input/passwd')
    }

    async enterPassword(value: string) {
        await this.passwordInput.waitForDisplayed({ timeout: 10000 })
        await this.passwordInput.click()
        await this.passwordInput.clearValue()
        await this.passwordInput.setValue(value)
    }

    async submit() {
        await browser.keys('Enter')
    }

    async isResultDisplayed(): Promise<boolean> {
        return await this.resultText.isExisting()
    }
}

export default new PasswordPage()