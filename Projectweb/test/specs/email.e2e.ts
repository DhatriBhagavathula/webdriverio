import { expect } from '@wdio/globals'
import EmailPage from '../pageobjects/email.page'

describe('QA Practice - Email Field Full Test Suite', () => {

    beforeEach(async () => {
        await EmailPage.open()
    })

    // --------------------------------
    // VALID EMAIL TESTS
    // --------------------------------

    const validEmails = [
        'test@example.com',
        'user123@gmail.com',
        'qa@test.co',
        'test@localhost'
    ]

    validEmails.forEach((email) => {

        it(`should accept valid email: ${email}`, async () => {

            await EmailPage.enterEmail(email)
            await EmailPage.submit()

            await EmailPage.resultText.waitForDisplayed({ timeout: 10000 })

            const text = await EmailPage.resultText.getText()
            expect(text).toContain(email)
        })

    })

    // --------------------------------
    // INVALID EMAIL TESTS
    // --------------------------------

    const invalidEmails = [
        'invalidemail',
        'test@',
        '@gmail.com',
        'test@@gmail.com',
        'test@gmail'
    ]

    invalidEmails.forEach((email) => {

        it(`should reject invalid email: "${email}"`, async () => {

            await EmailPage.enterEmail(email)
            await EmailPage.submit()

            await browser.pause(1000)

            const isDisplayed = await EmailPage.isResultDisplayed()

            expect(isDisplayed).toBe(false)
        })

    })

    // --------------------------------
    // EMPTY FIELD TEST
    // --------------------------------

    it('should show browser validation for empty input', async () => {

        await EmailPage.submit()

        const validationMessage = await browser.execute((el) => {
            return (el as HTMLInputElement).validationMessage
        }, await EmailPage.emailInput)

        expect(validationMessage).not.toBe('')
    })

})