import Page from './page'
import { $, browser } from '@wdio/globals'

class PopupPage extends Page {

    get launchBtn() {
        return $('button=Launch Pop-Up')
    }

    get modal() {
        return $('.modal.show')
    }

    get modalTitle() {
        return $('.modal-title')
    }

    get closeBtn() {
        return $('button.btn-close')
    }

    get checkbox() {
        return $('input[type="checkbox"]')
    }

    get sendBtn() {
        return $('button=Send')
    }

    get selectedSection() {
        return $('//*[contains(text(),"Selected checkboxes")]')
    }

    async open() {
        await super.open('elements/popup/modal')
    }

    async openPopup() {
        await this.launchBtn.click()
        await this.modal.waitForDisplayed()
    }

    async closePopup() {
        await this.closeBtn.waitForDisplayed({ timeout: 5000 })
        await this.closeBtn.click()
        await this.modal.waitForDisplayed({ reverse: true })
    }

    async sendCheckboxValue() {
        await this.checkbox.waitForDisplayed()
        await this.checkbox.click()
        await this.sendBtn.click()
    }
}

export default new PopupPage()