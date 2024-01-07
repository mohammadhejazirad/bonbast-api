import {RequestGet, RequestPost} from './interfaces';
import axios from 'axios';

export class Axios {
	public static async Post({url, param, headers}: RequestPost): Promise<any> {
		const {data} = await axios.post(url, param, headers);
		if ('reset' in data) throw new Error('Error: token is expired');
		return data;
	}

	public static async Get({url, headers}: RequestGet): Promise<any> {
		const {data} = await axios.get(url, headers);
		return data;
	}
}