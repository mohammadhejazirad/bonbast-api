import {Request} from '../requests';

export class BonbastApi {
	constructor(private readonly request: Request) {
	}

	public static async getPrice() {
		return await Request.getPrice();
	}
}