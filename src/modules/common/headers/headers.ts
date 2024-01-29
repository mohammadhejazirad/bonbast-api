import {Global} from '../enums';
import {RequestHeadersType} from '../types';

export const HeadersGetToken:RequestHeadersType = {
	'authority': 'bonbast.com',
	'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
	'accept-language': 'en-US,en;q=0.9,fa;q=0.8',
	'cache-control': 'no-cache',
	'cookie': 'cookieconsent_status=true; st_bb=0',
	'pragma': 'no-cache',
	'sec-ch-ua': '"Google Chrome";v="120", "Not;A=Brand";v="8", "Chromium";v="120"',
	'sec-ch-ua-mobile': '?1',
	'sec-ch-ua-platform': '"Android"',
	'sec-fetch-dest': 'document',
	'sec-fetch-mode': 'navigate',
	'sec-fetch-site': 'none',
	'sec-fetch-user': '?1',
	'upgrade-insecure-requests': '1',
	'user-agent': Global.USER_AGENT,
};

export const HeadersGetCurrency: RequestHeadersType = {
	'authority': 'bonbast.com',
	'accept': 'application/json, text/javascript, */*; q=0.01',
	'accept-language': 'en-US,en;q=0.9,fa;q=0.8',
	'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
	'cookie': 'st_bb=0',
	'origin': 'https://bonbast.com',
	'referer': 'https://bonbast.com/',
	'sec-ch-ua': '"Google Chrome";v="120", "Not;A=Brand";v="8", "Chromium";v="120"',
	'sec-ch-ua-mobile': '?1',
	'sec-ch-ua-platform': '"Android"',
	'sec-fetch-dest': 'empty',
	'sec-fetch-mode': 'cors',
	'sec-fetch-site': 'same-origin',
	'user-agent': Global.USER_AGENT,
	'x-requested-with': 'XMLHttpRequest',
};