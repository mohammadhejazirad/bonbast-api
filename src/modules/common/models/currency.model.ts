export enum CurrencyModel {
    'usd' = 'US Dollar',
    'eur' = 'Euro',
    'gbp' = 'British Pound',
    'chf' = 'Swiss Franc',
    'cad' = 'Canadian Dollar',
    'aud' = 'Australian Dollar',
    'sek' = 'Swedish Krona',
    'nok' = 'Norwegian Krone',
    'rub' = 'Russian Ruble',
    'thb' = 'Thai Baht',
    'sgd' = 'Singapore Dollar',
    'hkd' = 'Hong Kong Dollar',
    'azn' = 'Azerbaijani Manat',
    'amd' = '10 Armenian Dram',
    'dkk' = 'Danish Krone',
    'aed' = 'UAE Dirham',
    'jpy' = '10 Japanese Yen',
    'try' = 'Turkish Lira',
    'cny' = 'Chinese Yuan',
    'sar' = 'Saudi Riyal',
    'inr' = 'Indian Rupee',
    'myr' = 'Malaysian Ringgit',
    'afn' = 'Afghan Afghani',
    'kwd' = 'Kuwaiti Dinar',
    'iqd' = '100 Iraqi Dinar',
    'bhd' = 'Bahraini Dinar',
    'omr' = 'Omani Rial',
    'qar' = 'Qatari Rial',
}

export class CurrencyData {
	code: string;
	name: string;
	description?: string;
	sell?: number;
	buy?: number;

	constructor(code: string, name: string, sell?: number, buy?: number, description?: string) {
		this.code = code;
		this.name = name;
		this.sell = sell;
		this.buy = buy;
		this.description = description;
	}
}