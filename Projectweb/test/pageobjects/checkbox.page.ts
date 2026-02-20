import { $, browser } from '@wdio/globals'
import Page from './page'

class CheckboxPage extends Page {

    public get checkbox() {
        return $('#id_checkbox_0')
    }

    public get label() {
        return $('label[for="id_checkbox_0"]')
    }

    public get submitButton() {
        return $('#submit-id-submit')
    }

    public get resultText() {
        return $('.result')
    }

    open() {
        return super.open('elements/checkbox/single_checkbox')
    }

    async selectCheckbox() {
        await this.checkbox.waitForDisplayed({ timeout: 10000 })
        if (!(await this.checkbox.isSelected())) {
            await this.checkbox.click()
        }
    }

    async clickSubmit() {
        await this.submitButton.waitForDisplayed({ timeout: 10000 })
        await this.submitButton.click()
    }

    async isResultDisplayed(): Promise<boolean> {
        return await this.resultText.isExisting()
    }
}

export default new CheckboxPage()