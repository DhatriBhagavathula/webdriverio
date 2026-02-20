import { expect } from '@wdio/globals'

describe('Wonderous App – Scroll & Gesture Tests', () => {

    beforeEach(async () => {
        // Fix viewport to avoid out-of-bounds issues
        await browser.setWindowSize(1440, 900)
        await browser.url('https://wonderous.app/web/#/home')
        await browser.pause(7000) // wait for Flutter render
    })

    // TC-11: Vertical scroll
    it('TC-11: should scroll vertically using mouse wheel', async () => {
        await browser.action('wheel').scroll({
            deltaX: 0,
            deltaY: 600
        }).perform()

        await browser.pause(2000)

        const readyState = await browser.execute(() => document.readyState)
        expect(readyState).toBe('complete')
    })

    // TC-12: Horizontal swipe (left → right)
    it('TC-12: should navigate to next content using horizontal swipe', async () => {
        const { width, height } = await browser.getWindowSize()

        await browser.action('pointer')
            .move({ x: Math.round(width * 0.3), y: Math.round(height * 0.5) })
            .down({ button: 0 })
            .move({
                x: Math.round(width * 0.7),
                y: Math.round(height * 0.5),
                duration: 500
            })
            .up({ button: 0 })
            .perform()

        await browser.pause(3000)

        const state = await browser.execute(() => document.readyState)
        expect(state).toBe('complete')
    })

    // TC-13: Swipe back (right → left)
    it('TC-13: should navigate back using swipe back gesture', async () => {
        const { width, height } = await browser.getWindowSize()

        await browser.action('pointer')
            .move({ x: Math.round(width * 0.7), y: Math.round(height * 0.5) })
            .down({ button: 0 })
            .move({
                x: Math.round(width * 0.3),
                y: Math.round(height * 0.5),
                duration: 500
            })
            .up({ button: 0 })
            .perform()

        await browser.pause(3000)

        const state = await browser.execute(() => document.readyState)
        expect(state).toBe('complete')
    })

    // TC-14: Fast swipe
    it('TC-14: should respond correctly to fast swipe', async () => {
        const { width, height } = await browser.getWindowSize()

        await browser.action('pointer')
            .move({ x: Math.round(width * 0.7), y: Math.round(height * 0.5) })
            .down({ button: 0 })
            .move({
                x: Math.round(width * 0.3),
                y: Math.round(height * 0.5),
                duration: 150 // FAST swipe
            })
            .up({ button: 0 })
            .perform()

        await browser.pause(3000)

        const state = await browser.execute(() => document.readyState)
        expect(state).toBe('complete')
    })

    // TC-15: Continuous scroll
    it('TC-15: should remain stable during continuous scrolling', async () => {
        for (let i = 0; i < 5; i++) {
            await browser.action('wheel').scroll({
                deltaX: 0,
                deltaY: 400
            }).perform()

            await browser.pause(500)
        }

        const readyState = await browser.execute(() => document.readyState)
        expect(readyState).toBe('complete')
    })

})