import { expect } from '@wdio/globals'
import MultipleTextAreaPage from '../pageobjects/mtextarea.page'

describe('Multiple Text Area – Web Automation', () => {

    beforeEach(async () => {
        await MultipleTextAreaPage.open()
    })

    it('should not submit when required First chapter is empty', async () => {
        await MultipleTextAreaPage.submit()

        const isDisplayed = await MultipleTextAreaPage.isResultDisplayed()
        expect(isDisplayed).toBe(false)
    })

    it('should display all entered chapter texts after submission', async () => {

        const firstText = 'This is the first chapter content'
        const secondText = 'This is the second chapter content'
        const thirdText = 'This is the third chapter content'

        await MultipleTextAreaPage.enterFirstChapter(firstText)
        await MultipleTextAreaPage.enterSecondChapter(secondText)
        await MultipleTextAreaPage.enterThirdChapter(thirdText)

        await MultipleTextAreaPage.submit()

        await MultipleTextAreaPage.resultText.waitForDisplayed()

        const result = await MultipleTextAreaPage.getResultText()

        expect(result).toContain(firstText)
        expect(result).toContain(secondText)
        expect(result).toContain(thirdText)
    })

})