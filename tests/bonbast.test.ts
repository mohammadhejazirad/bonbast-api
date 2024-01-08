import {BonbastApi} from '../dist';

describe('Your Test Suite', () => {
	test('Your Test Case', async () => {
		console.log(await BonbastApi.getCurrency());
		console.log('Hi BonbastApi');
	});
});
