import { expect } from '@wdio/globals'
import PasswordPage from '../pageobjects/password.page'

describe('QA Practice - Password Field Full Test Suite', () => {

    beforeEach(async () => {
        await PasswordPage.open()
    })

    // --------------------------------
    // VALID PASSWORD TESTS
    // --------------------------------

    const validPasswords = [
        'Password1!',
        'QaTest@123',
        'Strong#2024',
        'HelloWorld9$'
    ]

    validPasswords.forEach((password) => {

        it(`should accept valid password: ${password}`, async () => {

            await PasswordPage.enterPassword(password)
            await PasswordPage.submit()

            await PasswordPage.resultText.waitForDisplayed({ timeout: 10000 })

            const text = await PasswordPage.resultText.getText()
            expect(text).toContain(password)
        })

    })

    // --------------------------------
    //  INVALID PASSWORD TESTS
    // --------------------------------

    const invalidPasswords = [
        'short1!',        // less than 8 chars
        'password1!',     // no uppercase
        'PASSWORD1!',     // no lowercase
        'Password!',      // no digit
        'Password1',      // no special char
        ''                // empty
    ]

    invalidPasswords.forEach((password) => {

        it(`should reject invalid password: "${password}"`, async () => {

            await PasswordPage.enterPassword(password)
            await PasswordPage.submit()

            await browser.pause(1000)

            const isDisplayed = await PasswordPage.isResultDisplayed()
            expect(isDisplayed).toBe(false)
        })

    })

})