import { $, $$, browser } from '@wdio/globals'
import Page from './page'

class MultipleCheckboxPage extends Page {

    public get checkboxes() {
        return $$('input[type="checkbox"]')
    }

    public get labels() {
        return $$('label.form-check-label')
    }

    public get submitButton() {
        return $('#submit-id-submit')
    }

    public get resultText() {
        return $('.result')
    }

    open() {
        return super.open('elements/checkbox/mult_checkbox')
    }

    async selectCheckboxByIndex(index: number) {
        const boxes = await this.checkboxes
        if (!(await boxes[index].isSelected())) {
            await boxes[index].click()
        }
    }

    async clickSubmit() {
        await this.submitButton.waitForDisplayed({ timeout: 10000 })
        await this.submitButton.click()
    }

    async isResultDisplayed(): Promise<boolean> {
        return await this.resultText.isExisting()
    }

    async getResultText(): Promise<string> {
        return await this.resultText.getText()
    }
}

export default new MultipleCheckboxPage()