export interface CurrencyModelResponse {
    code: string;
    name?: string;
    sell?: number | string | null;
    buy?: number | string | null;
}