import { expect, browser } from '@wdio/globals'
import NewTabPage from '../pageobjects/newtab.page'

describe('Open Link In New Tab', () => {

    beforeEach(async () => {
        await NewTabPage.open()
    })

    it('should open new page in a new tab', async () => {

        const originalWindow = await browser.getWindowHandle()

        await NewTabPage.clickLink()

        await browser.waitUntil(
            async () => (await browser.getWindowHandles()).length > 1,
            { timeout: 10000 }
        )

        const allWindows = await browser.getWindowHandles()

        const newWindow = allWindows.find(handle => handle !== originalWindow)

        if (!newWindow) {
            throw new Error('New tab did not open')
        }

        await browser.switchToWindow(newWindow)

        const currentUrl = await browser.getUrl()

        expect(currentUrl).toContain('/elements/new_tab/new_page')

        const header = await $('h1')
        await expect(header).toBeDisplayed()

    })

})