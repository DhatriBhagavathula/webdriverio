import { $, $$, browser } from '@wdio/globals'
import Page from './page'

class SingleSelectPage extends Page {

    public get dropdown() {
        return $('#id_choose_language')
    }

    public get label() {
        return $('label[for="id_choose_language"]')
    }

    public get submitButton() {
        return $('#submit-id-submit')
    }

    public get resultText() {
        return $('.result')
    }

    public get options() {
        return $$('#id_choose_language option')
    }

    open() {
        return super.open('elements/select/single_select')
    }

    async selectByText(value: string) {
        await this.dropdown.waitForDisplayed({ timeout: 10000 })
        await this.dropdown.selectByVisibleText(value)
    }

    async clickSubmit() {
        await this.submitButton.waitForDisplayed({ timeout: 10000 })
        await this.submitButton.click()
    }

    async getResultText(): Promise<string> {
        return await this.resultText.getText()
    }

    async isResultDisplayed(): Promise<boolean> {
        return await this.resultText.isExisting()
    }
}

export default new SingleSelectPage()