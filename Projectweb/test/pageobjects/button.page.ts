import { $, browser } from '@wdio/globals'
import Page from './page'

class ButtonPage extends Page {

    public get submitButton() {
        return $('#submit-id-submit')
    }

    public get resultText() {
        return $('.result')
    }

    open() {
        return super.open('elements/button/simple')
    }

    async clickButton() {
        await this.submitButton.waitForDisplayed({ timeout: 10000 })
        await this.submitButton.click()
    }

    async getButtonValue() {
        return await this.submitButton.getValue()
    }
}

export default new ButtonPage()