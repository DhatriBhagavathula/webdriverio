import { expect } from '@wdio/globals'
import TravelSelectPage from '../pageobjects/mselect.page'

describe('Travel Form - Fully Dynamic Validation', () => {

    beforeEach(async () => {
        await TravelSelectPage.open()
    })

    it('should generate correct phrase after submission', async () => {

        const destination = await TravelSelectPage.destinationDropdown.$('option:not([value=""])').getText()
        const transport = await TravelSelectPage.transportDropdown.$('option:not([value=""])').getText()
        const when = await TravelSelectPage.whenDropdown.$('option:not([value=""])').getText()

        await TravelSelectPage.selectDestination(destination)
        await TravelSelectPage.selectTransport(transport)
        await TravelSelectPage.selectWhen(when)

        await TravelSelectPage.clickSubmit()

        await TravelSelectPage.resultText.waitForDisplayed({ timeout: 10000 })

        const result = await TravelSelectPage.getResultText()

        const normalized = result.replace(/\s+/g, ' ').trim().toLowerCase()

        const expectedPhrase =
            `you selected to go by ${transport.toLowerCase()} ` +
            `to the ${destination.toLowerCase()} ` +
            `${when.toLowerCase()}`

        expect(normalized).toContain(expectedPhrase)
    })

})