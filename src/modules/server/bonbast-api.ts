import {Request} from '../requests';
import {ResponseApi} from '../common';

export class BonbastApi {
	constructor(private readonly request: Request) {
	}

	public static async getResponse(): Promise<ResponseApi> {
		return await Request.getResponse();
	}

	public static async getCurrency(): Promise<any> {
		return await Request.getCurrency();
	}
}