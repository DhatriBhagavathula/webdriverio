import { expect } from '@wdio/globals'
import DragDropPage from '../pageobjects/dragdrop.page'

describe('Drag and Drop – Web Automation', () => {

    beforeEach(async () => {
        await DragDropPage.open()
    })

    it('should drag bottom square to top square and show Dropped!', async () => {
        await DragDropPage.dragOnce()

        const text = await DragDropPage.droppable.getText()

        expect(text).toContain('Dropped!')
    })

    it('should not allow dragging twice', async () => {
        
        await DragDropPage.dragOnce()

        const firstState = await DragDropPage.droppable.getText()
        expect(firstState).toContain('Dropped!')

        await DragDropPage.dragOnce()

        const secondState = await DragDropPage.droppable.getText()
        expect(secondState).toBe(firstState)
    })
})