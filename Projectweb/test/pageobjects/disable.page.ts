import { $, browser } from '@wdio/globals'
import Page from './page'

class DisabledButtonPage extends Page {

    public get dropdown() {
        return $('#id_select_state')
    }

    public get submitButton() {
        return $('#submit-id-submit')
    }

    public get resultText() {
        return $('.result')
    }

    open() {
        return super.open('elements/button/disabled')
    }

    async selectOption(value: string) {
        await this.dropdown.waitForDisplayed({ timeout: 10000 })
        await this.dropdown.selectByVisibleText(value)
    }

    async clickSubmit() {
        await this.submitButton.waitForEnabled({ timeout: 10000 })
        await this.submitButton.click()
    }
}

export default new DisabledButtonPage()