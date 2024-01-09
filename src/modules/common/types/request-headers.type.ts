import {Global} from '../index';

export type RequestHeadersType = {
    'authority': string;
    'accept-language': string;
    'sec-ch-ua': string;
    'sec-ch-ua-mobile': string;
    'sec-ch-ua-platform': string;
    'user-agent': Global.USER_AGENT | string;
    'accept'?: string;
    'cache-control'?: string;
    'cookie'?: string;
    'pragma'?: string;
    'sec-fetch-dest'?: string;
    'sec-fetch-mode'?: string;
    'sec-fetch-site'?: string;
    'sec-fetch-user'?: string;
    'upgrade-insecure-requests'?: string;
    'content-type'?: string;
    'origin'?: string;
    'referer'?: string;
    'x-requested-with'?: string;
}