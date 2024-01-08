const {BonbastApi} = require("../dist")

describe('Your Test Suite', () => {
    test('Your Test Case', async () => {
       console.log(await BonbastApi.getResponse());
        console.log('Hi BonbastApi');
    });
});