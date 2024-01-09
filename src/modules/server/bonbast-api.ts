import {Request} from '../requests';
import {CoinModelInterface, CurrencyModelInterface, ResponseApi} from '../common';
import {GetCurrencyOptions} from '../common/interfaces/options';

export class BonbastApi {
	constructor(private readonly request: Request) {
	}

	public static async getResponse(): Promise<ResponseApi> {
		return await Request.getResponse();
	}

	public static async getCurrency(options?: GetCurrencyOptions): Promise<CurrencyModelInterface[]> {
		return await Request.getCurrency(options);
	}

	public static async getCoin(): Promise<CoinModelInterface[]> {
		return await Request.getCoin();
	}
}