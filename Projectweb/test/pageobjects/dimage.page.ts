import Page from './page'

class DragDropImagesPage extends Page {

    get firstSquare() {
        return $('#rect-droppable1')
    }

    get secondSquare() {
        return $('#rect-droppable2')
    }

    get smiley() {
        return $('img.rect-draggable')
    }

    get firstDroppedText() {
        return $('#rect-droppable1 .text-droppable')
    }

    get secondDroppedText() {
        return $('#rect-droppable2 .text-droppable')
    }

    async open() {
        await super.open('elements/dragndrop/images')
    }

    async dragToFirstSquare() {
        await this.smiley.waitForExist()
        await this.smiley.dragAndDrop(this.firstSquare)
    }

    async dragToSecondSquare() {
        await this.smiley.waitForExist()
        await this.smiley.dragAndDrop(this.secondSquare)
    }
}

export default new DragDropImagesPage()