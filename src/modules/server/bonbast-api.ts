import {Request} from '../requests';
import {
	CoinModelResponse,
	CurrencyModelResponse,
	GetCoinOptions,
	GetCurrencyOptions,
	GetGoldOptions,
	GoldModelResponse,
	ResponseApi
} from '../common';

export class BonbastApi {
	constructor(private readonly request: Request) {
	}

	public static async getResponse(): Promise<ResponseApi> {
		return await Request.getResponse();
	}

	public static async getCurrency(options?: GetCurrencyOptions): Promise<CurrencyModelResponse[]> {
		return await Request.getCurrency(options);
	}

	public static async getCoin(options?: GetCoinOptions): Promise<CoinModelResponse[]> {
		return await Request.getCoin(options);
	}

	public static async getGold(options?: GetGoldOptions): Promise<GoldModelResponse[]> {
		return await Request.getGold(options);
	}
}