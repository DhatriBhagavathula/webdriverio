import { $, browser } from '@wdio/globals'
import Page from './page'

class NewTabButtonPage extends Page {

    get newTabButton() {
        return $('#new-page-button')
    }

    open() {
        return super.open('elements/new_tab/button')
    }

    async clickButton() {
        await this.newTabButton.waitForDisplayed()
        await this.newTabButton.click()
    }
}

export default new NewTabButtonPage()