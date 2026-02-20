import { expect } from '@wdio/globals'

describe('Wonderous App – Smoke Tests', () => {

    beforeEach(async () => {
        await browser.url('https://wonderous.app/web/#/home')
        await browser.pause(5000) // wait for Flutter canvas render
    })

    // TC-01: Verify app loads
    it('TC-01: should load the app without crash', async () => {
        const title = await browser.getTitle()
        expect(title).toBeDefined()
    })

    // TC-02: Verify no blank screen
    it('TC-02: should not show blank screen', async () => {
        const hasContent = await browser.execute(() => {
            return document.body && document.body.innerHTML.length > 0
        })
        expect(hasContent).toBe(true)
    })

    // TC-03: Verify network load
    it('TC-03: should load page completely', async () => {
        const readyState = await browser.execute(() => document.readyState)
        expect(readyState).toBe('complete')
    })

    // TC-04: Reload app
    it('TC-04: should reload the app successfully', async () => {
        await browser.refresh()
        await browser.pause(5000)

        const reloadState = await browser.execute(() => document.readyState)
        expect(reloadState).toBe('complete')
    })

})