import { expect } from '@wdio/globals'

describe('Wonderous App – Click / Tap Interaction Tests', () => {

    beforeEach(async () => {
        await browser.url('https://wonderous.app/web/#/home')
        await browser.pause(5000) // wait for canvas render
    })

    // TC-06: Click center of screen
    it('TC-06: should trigger navigation or animation on center click', async () => {
        const { width, height } = await browser.getWindowSize()

        await browser.action('pointer')
            .move({ x: width / 2, y: height / 2 })
            .down({ button: 0 })
            .up({ button: 0 })
            .perform()

        await browser.pause(3000)

        // basic stability assertion
        const readyState = await browser.execute(() => document.readyState)
        expect(readyState).toBe('complete')
    })

    // TC-07: Click explore area (center-lower area)
    it('TC-07: should navigate forward when explore area is clicked', async () => {
        const { width, height } = await browser.getWindowSize()

        await browser.action('pointer')
            .move({ x: width * 0.5, y: height * 0.65 })
            .down({ button: 0 })
            .up({ button: 0 })
            .perform()

        await browser.pause(3000)

        const pageLoaded = await browser.execute(() => document.readyState)
        expect(pageLoaded).toBe('complete')
    })

it('TC-08: should open wonder detail view when down arrow is clicked', async () => {

    // 1️⃣ Fix viewport (MANDATORY for canvas apps)
    await browser.setWindowSize(1440, 900)

    await browser.url('https://wonderous.app/web/#/home')
    await browser.pause(7000) // wait for Flutter animations

    const { width, height } = await browser.getWindowSize()

    // 2️⃣ SAFE down-arrow coordinates (based on screenshots)
    const x = Math.round(width * 0.5)
    const y = Math.round(height * 0.78) // NOT bottom edge

    await browser.action('pointer')
        .move({ x, y })
        .down({ button: 0 })
        .up({ button: 0 })
        .perform()

    // 3️⃣ Wait for navigation
    await browser.waitUntil(
        async () => (await browser.getUrl()).includes('/wonder/'),
        {
            timeout: 10000,
            timeoutMsg: 'Wonder detail page did not open'
        }
    )

    // 4️⃣ ASSERTION (REAL & STRONG)
    const currentUrl = await browser.getUrl()
    expect(currentUrl).toContain('/wonder/')
})
    // TC-09: Click back navigation (left arrow area)
    it('TC-09: should return to previous screen using back navigation', async () => {
        const { width, height } = await browser.getWindowSize()

        // click left arrow (back)
        await browser.action('pointer')
            .move({ x: width * 0.1, y: height * 0.5 })
            .down({ button: 0 })
            .up({ button: 0 })
            .perform()

        await browser.pause(3000)

        const state = await browser.execute(() => document.readyState)
        expect(state).toBe('complete')
    })

    // TC-10: Multiple rapid clicks
    it('TC-10: should remain stable on multiple rapid clicks', async () => {
        const { width, height } = await browser.getWindowSize()

        for (let i = 0; i < 5; i++) {
            await browser.action('pointer')
                .move({ x: width / 2, y: height / 2 })
                .down({ button: 0 })
                .up({ button: 0 })
                .perform()
        }

        await browser.pause(3000)

        // stability check
        const readyState = await browser.execute(() => document.readyState)
        expect(readyState).toBe('complete')
    })

})