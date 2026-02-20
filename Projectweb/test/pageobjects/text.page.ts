import { $, browser } from '@wdio/globals'
import Page from './page'

class TextFormPage extends Page {

    public get inputField() {
        return $('#id_text_string')  
    }

    public get resultText() {
        return $('#result-text')
    }

    public get errorMessage() {
        return $('.invalid-feedback')
    }

    open() {
        return super.open('elements/input/simple')
    }

    async enterText(value: string) {
        await this.inputField.waitForDisplayed({ timeout: 10000 })
        await this.inputField.click()
        await this.inputField.setValue(value)
    }

    async submit() {
    await browser.keys('Enter')
}
}

export default new TextFormPage()