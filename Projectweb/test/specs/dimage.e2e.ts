import { expect, browser } from '@wdio/globals'
import DragDropImagesPage from '../pageobjects/dimage.page'

describe('Drag and Drop – Images – Web Automation', () => {

    beforeEach(async () => {
        await DragDropImagesPage.open()
    })

    it('should drop smiley into bottom square and show Dropped!', async () => {
        await DragDropImagesPage.dragToSecondSquare()

        await DragDropImagesPage.secondDroppedText.waitForDisplayed()

        expect(await DragDropImagesPage.secondDroppedText.getText())
            .toBe('Dropped!')

        expect(await DragDropImagesPage.firstSquare.$('img').isExisting())
            .toBe(false)
    })

    it('should allow dragging smiley infinite times', async () => {
        await DragDropImagesPage.dragToSecondSquare()
        await DragDropImagesPage.dragToFirstSquare()
        await DragDropImagesPage.dragToSecondSquare()

        await DragDropImagesPage.secondDroppedText.waitForDisplayed()

        expect(await DragDropImagesPage.secondDroppedText.getText())
            .toBe('Dropped!')

        expect(await DragDropImagesPage.firstSquare.$('img').isExisting())
            .toBe(false)
    })
})