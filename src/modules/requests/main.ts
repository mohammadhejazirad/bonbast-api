import {Axios} from './request.axios';
import {CurrencyModel, Global, HeadersGetPrice, HeadersGetToken, ResponseApi, Utils} from '../common';
import {Token} from './token.request';

export class Request {
	public static async getResponse(): Promise<ResponseApi> {
		try {
			const token = await this.getToken();
			if (!token) {
				throw new Error('token not found');
			}
			const data = await Axios.Post({
				url: `${Global.BASE_URL}/json`,
				headers: HeadersGetPrice,
				param: token,
			});
			return {...data};
		} catch (e) {
			throw new Error(`Error: Failed to connect to bonbast: ${e}`);
		}
	}

	public static async getCurrency() {
		try {
			const token = await this.getToken();
			if (!token) {
				throw new Error('token not found');
			}
			const data = await Axios.Post({
				url: `${Global.BASE_URL}/json`,
				headers: HeadersGetPrice,
				param: token,
			});
			const exportData = [];
			const currencies = Object.keys(data).filter(key => key.match(/[a-z]+\d+/));
			for (const currency of currencies) {
				const code = currency.slice(0, -1);
				if (CurrencyModel.hasOwnProperty(code)) {
					const name = data[`${code}g`] || CurrencyModel[code as keyof typeof CurrencyModel];
					const sell = Utils.addCommasNumber(data[`${code}${Global.SELL}`]);
					const buy = Utils.addCommasNumber(data[`${code}${Global.BUY}`]);
					exportData.push({
						code,
						name,
						sell,
						buy
					});
				}
			}
			return [...new Set(exportData)];
		} catch (e) {
			throw new Error(`Error: Failed to connect to bonbast: ${e}`);
		}
	}

	private static async getToken(): Promise<string | null> {
		try {
			const data = await Axios.Get({
				url: Global.BASE_URL,
				headers: HeadersGetToken
			});
			return Token.withdrawToken(data);
		} catch (e) {
			throw new Error(`Error: Failed to connect to bonbast: ${e}`);
		}
	}


}