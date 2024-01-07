import {Axios} from './request.axios';
import {Global, HeadersGetPrice, HeadersGetToken} from '../common';
import {Token} from './token.request';

export class Request {

	public static async getPrice() {
		try {
			const token = await this.getToken();
			if (!token) {
				return new Error('token is null');
			}
			return await Axios.Post({
				url: `${Global.BASE_URL}/json`,
				headers: HeadersGetPrice,
				param: {token},
			});
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