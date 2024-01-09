import {BonbastApi} from '../src';

describe('Test BonbastApi for TS', () => {

	test('getResponse', async () => {
		const getResponse = await BonbastApi.getResponse();
		console.log(getResponse);
	});
	
	test('getCurrency', async () => {
		const getCurrency = await BonbastApi.getCurrency({
			sellAddCommas: false,
			buyAddCommas: false
		});
		console.log(getCurrency);
	});

	test('getCoin', async () => {
		const getCoin = await BonbastApi.getCoin();
		console.log(getCoin);
	});

	test('getGold', async () => {
		const getGold = await BonbastApi.getGold();
		console.log(getGold);
	});
});
