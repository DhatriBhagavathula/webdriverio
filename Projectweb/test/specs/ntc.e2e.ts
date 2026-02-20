import { expect, browser } from '@wdio/globals'
import NewTabButtonPage from '../pageobjects/ntc.page'

describe('New tab button – Web automation', () => {

    beforeEach(async () => {
        await NewTabButtonPage.open()
    })

    it('should open new page in a new tab when button is clicked', async () => {

        const originalWindow = await browser.getWindowHandle()

        await NewTabButtonPage.clickButton()

        await browser.waitUntil(
            async () => (await browser.getWindowHandles()).length === 2,
            { timeout: 10000, timeoutMsg: 'New tab not opened' }
        )

        const windows = await browser.getWindowHandles()
        const newWindow = windows.find(w => w !== originalWindow)!

        await browser.switchToWindow(newWindow)

        const url = await browser.getUrl()
        expect(url).toContain('/elements/new_tab/new_page')

        await expect($('h1')).toBeDisplayed()
    })
})