import {RequestHeadersType} from '../types';

export interface RequestPost {
    url: string;
    headers: RequestHeadersType;
    param: string | Record<string, any> | object | number;
}

