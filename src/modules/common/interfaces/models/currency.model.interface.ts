export interface CurrencyModelInterface {
    code: string;
    name?: string;
    sell?: number | string | null;
    buy?: number | string | null;
}