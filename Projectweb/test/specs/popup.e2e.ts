import { expect } from '@wdio/globals'
import PopupPage from '../pageobjects/popup.page'

describe('Pop-Up (Modal) – Web Automation', () => {

    beforeEach(async () => {
        await PopupPage.open()
    })

    it('should open the pop-up with correct title', async () => {
        await PopupPage.openPopup()
        await expect(PopupPage.modalTitle).toHaveText('I am a Pop-Up')
    })

    it('should close the pop-up using close button', async () => {
        await PopupPage.openPopup()
        await PopupPage.closePopup()
    })

    it('should send checkbox value and display result section', async () => {
        await PopupPage.openPopup()
        await PopupPage.sendCheckboxValue()
        await expect(PopupPage.selectedSection).toBeDisplayed()
    })

    it('should keep result section hidden before sending value', async () => {
        await expect(PopupPage.selectedSection).not.toBeDisplayed()
    })
})