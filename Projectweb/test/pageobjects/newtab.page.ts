import { $, browser } from '@wdio/globals'
import Page from './page'

class NewTabPage extends Page {

    public get newTabLink() {
        return $('=New page will be opened on a new tab')
    }

    open() {
        return super.open('elements/new_tab/link')
    }

    async clickLink() {
        await this.newTabLink.waitForDisplayed({ timeout: 10000 })
        await this.newTabLink.click()
    }
}

export default new NewTabPage()