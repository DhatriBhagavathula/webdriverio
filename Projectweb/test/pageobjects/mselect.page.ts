import { $, browser } from '@wdio/globals'
import Page from './page'

class TravelSelectPage extends Page {

    public get destinationDropdown() {
        return $('#id_choose_the_place_you_want_to_go')
    }

    public get transportDropdown() {
        return $('#id_choose_how_you_want_to_get_there')
    }

    public get whenDropdown() {
        return $('#id_choose_when_you_want_to_go')
    }

    public get submitButton() {
        return $('#submit-id-submit')
    }

    public get resultText() {
        return $('.result')
    }

    open() {
        return super.open('elements/select/mult_select')
    }

    async selectDestination(value: string) {
        await this.destinationDropdown.selectByVisibleText(value)
    }

    async selectTransport(value: string) {
        await this.transportDropdown.selectByVisibleText(value)
    }

    async selectWhen(value: string) {
        await this.whenDropdown.selectByVisibleText(value)
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

export default new TravelSelectPage()