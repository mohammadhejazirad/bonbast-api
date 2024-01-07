import {RequestHeaders} from '../types';

export interface RequestPost {
    url: string;
    headers: RequestHeaders;
    param: RequestHeaders;
}

