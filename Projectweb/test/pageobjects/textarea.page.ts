import { $, browser } from '@wdio/globals'
import Page from './page'

class TextAreaPage extends Page {

    get label() {
        return $('label[for="id_text_area"]')
    }

    get textArea() {
        return $('#id_text_area')
    }

    get submitButton() {
        return $('#submit-id-submit')
    }

    get resultText() {
        return $('.result')
    }

    open() {
        return super.open('elements/textarea/single')
    }

    async enterText(value: string) {
        await this.textArea.waitForDisplayed()
        await this.textArea.setValue(value)
    }

    async submit() {
        await this.submitButton.click()
    }

    async getResultText(): Promise<string> {
        return await this.resultText.getText()
    }

    async isResultDisplayed(): Promise<boolean> {
        return await this.resultText.isExisting()
    }
}

export default new TextAreaPage()