import Page from './page'

class DragDropPage extends Page {
    get droppable() {
        return $('#rect-droppable')
    }

    get draggable() {
        return $('#rect-draggable')
    }

    async open() {
        await super.open('elements/dragndrop/boxes')
    }

    async dragOnce() {
        await this.draggable.dragAndDrop(this.droppable)
    }
}

export default new DragDropPage()