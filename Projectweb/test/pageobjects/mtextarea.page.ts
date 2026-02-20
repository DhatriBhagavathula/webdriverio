import { $ } from '@wdio/globals'
import Page from './page'

class MultipleTextAreaPage extends Page {

    get firstChapter() {
        return $('#id_first_chapter')
    }

    get secondChapter() {
        return $('#id_second_chapter')
    }

    get thirdChapter() {
        return $('#id_third_chapter')
    }

    get submitButton() {
        return $('#submit-id-submit')
    }

    get resultText() {
        return $('.result')
    }

    open() {
        return super.open('elements/textarea/textareas')
    }

    async enterFirstChapter(text: string) {
        await this.firstChapter.waitForDisplayed()
        await this.firstChapter.setValue(text)
    }

    async enterSecondChapter(text: string) {
        await this.secondChapter.setValue(text)
    }

    async enterThirdChapter(text: string) {
        await this.thirdChapter.setValue(text)
    }

    async submit() {
        await this.submitButton.click()
    }

    async isResultDisplayed(): Promise<boolean> {
        return await this.resultText.isExisting()
    }

    async getResultText(): Promise<string> {
        return await this.resultText.getText()
    }
}

export default new MultipleTextAreaPage()