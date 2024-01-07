import {BonbastApi} from '../src';

describe('Your Test Suite', () => {
	test('Your Test Case', async () => {
		console.log(await BonbastApi.getPrice());
		console.log('Hi BonbastApi');
	});
});
