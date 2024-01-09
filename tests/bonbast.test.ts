import {BonbastApi} from '../src';

describe('Your Test Suite', () => {
	test('Your Test Case', async () => {
		const getResponse = await BonbastApi.getResponse();
		const getCurrency = await BonbastApi.getCurrency({
			sellAddCommas: true,
			buyAddCommas: true
		});
		const getCoin = await BonbastApi.getCoin();
		console.log({
			getCoin
		});
		console.log('Finished TS');
	});
});
