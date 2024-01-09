const {BonbastApi} = require("../src")

describe('Your Test Suite', () => {
    test('Your Test Case', async () => {
        const getApi = await BonbastApi.getResponse();
        const getCurrency = await BonbastApi.getCurrency();
        console.log({
            getApi,
            getCurrency,
            length: getCurrency.length,
        });
        console.log('Finished JS');
    });
});