import {Axios} from './request.axios';
import {
	CoinModel,
	CoinModelResponse,
	CurrencyModel,
	CurrencyModelResponse,
	GetCoinOptions,
	GetCurrencyOptions,
	GetGoldOptions,
	Global,
	GoldModel,
	GoldModelResponse,
	HeadersGetCurrency,
	HeadersGetToken,
	ResponseApi,
	Utils
} from '../common';
import {Token} from './token.request';

export class Request {
	public static async getResponse(): Promise<ResponseApi> {
		try {
			const token = await this.getToken();
			const data = await Axios.Post({
				url: `${Global.BASE_URL}/json`,
				headers: HeadersGetCurrency,
				param: token,
			});
			return {...data};
		} catch (error) {
			if (error instanceof Error) {
				console.error(`Error: Failed to connect to bonbast: ${error.message}`);
				throw error;
			} else {
				console.error(`Unknown error occurred: ${error}`);
				throw new Error('Unknown error occurred');
			}
		}
	}

	public static async getCurrency(options?: GetCurrencyOptions): Promise<CurrencyModelResponse[]> {
		try {
			const token = await this.getToken();
			const data = await Axios.Post({
				url: `${Global.BASE_URL}/json`,
				headers: HeadersGetCurrency,
				param: token,
			});
			const exportData: CurrencyModelResponse[] = [];
			const uniqueKeys: string[] = [];
			const currencies = Object.keys(data).filter(key => key.match(/[a-z]+\d+/));
			for (const currency of currencies) {
				const code = currency.slice(0, -1);
				if (CurrencyModel.hasOwnProperty(code)) {
					const key = `${code}${Global.SELL}${Global.BUY}`;
					if (uniqueKeys.includes(key)) continue;
					uniqueKeys.push(key);
					const name = data[`${code}g`] || CurrencyModel[code as keyof typeof CurrencyModel];
					const sell = options?.sellAddCommas === false ? Number(data[`${code}${Global.SELL}`]) : Utils.addCommasNumber(data[`${code}${Global.SELL}`]);
					const buy = options?.buyAddCommas === false ? Number(data[`${code}${Global.BUY}`]) : Utils.addCommasNumber(data[`${code}${Global.BUY}`]);
					exportData.push({code, name, sell, buy});
				}
			}
			return exportData;
		} catch (error) {
			if (error instanceof Error) {
				console.error(`Error: Failed to connect to bonbast: ${error.message}`);
				throw error;
			} else {
				console.error(`Unknown error occurred: ${error}`);
				throw new Error('Unknown error occurred');
			}
		}
	}

	public static async getCoin(options?: GetCoinOptions): Promise<CoinModelResponse[]> {
		try {
			const token = await this.getToken();
			const data = await Axios.Post({
				url: `${Global.BASE_URL}/json`,
				headers: HeadersGetCurrency,
				param: token,
			});
			const exportData: CoinModelResponse[] = [];
			const uniqueKeys: string[] = [];
			const coins = Object.keys(data).filter(key => key.match(/[a-z]+\d+/));
			for (const coin of Object.keys(CoinModel)) {
				const coinsCode = Object.keys(data).filter(key => key.match(/[a-z]+\d+/) && key.includes(coin));
				for (const coinCode of coinsCode) {
					const name = CoinModel[coin as keyof typeof CoinModel];
					if (uniqueKeys.includes(name)) continue;
					const code = coinCode.replace(/\d+|[1g_]+/g, '');
					const sell = options?.sellAddCommas === false ? Number(data[`${coin}`]) : Utils.addCommasNumber(data[`${coin}`]);
					const buy = options?.buyAddCommas === false ? Number(data[`${coin}${Global.BUY}`]) : Utils.addCommasNumber(data[`${coin}${Global.BUY}`]);
					uniqueKeys.push(name);
					exportData.push({code, name, sell, buy});
				}
			}
			return exportData;
		} catch (error) {
			if (error instanceof Error) {
				console.error(`Error: Failed to connect to bonbast: ${error.message}`);
				throw error;
			} else {
				console.error(`Unknown error occurred: ${error}`);
				throw new Error('Unknown error occurred');
			}
		}
	}

	public static async getGold(options?: GetGoldOptions): Promise<GoldModelResponse[]> {
		try {
			const token = await this.getToken();
			const data = await Axios.Post({
				url: `${Global.BASE_URL}/json`,
				headers: HeadersGetCurrency,
				param: token,
			});

			const exportData: GoldModelResponse[] = [];
			const uniqueKeys: string[] = [];
			const golds = Object.keys(data).filter(key => key.match(/[a-z]+\d+/));
			for (const gold of Object.keys(GoldModel)) {
				const name = GoldModel[gold as keyof typeof GoldModel];
				const price = options?.priceAddCommas === false ? Number(data[`${gold}`]) : Utils.addCommasNumber(data[`${gold}`]);
				const code = gold;
				exportData.push({code, name, price});
			}
			return exportData;
		} catch (error) {
			if (error instanceof Error) {
				console.error(`Error: Failed to connect to bonbast: ${error.message}`);
				throw error;
			} else {
				console.error(`Unknown error occurred: ${error}`);
				throw new Error('Unknown error occurred');
			}
		}
	}

	private static async getToken(): Promise<string> {
		try {
			const data = await Axios.Get({
				url: Global.BASE_URL,
				headers: HeadersGetToken
			});
			const token = Token.withdrawToken(data);
			if (!token) {
				throw new Error('token not found');
			}
			return token;
		} catch (error) {
			if (error instanceof Error) {
				console.error(`Error: Failed to connect to bonbast: ${error.message}`);
				throw error;
			} else {
				console.error(`Unknown error occurred: ${error}`);
				throw new Error('Unknown error occurred');
			}
		}
	}
}