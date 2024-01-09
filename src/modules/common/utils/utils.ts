import {addCommas, removeCommas} from '@persian-tools/persian-tools';

export class Utils {
	public static addCommasNumber(input: number): string | null {
		if (!input) return null;
		return addCommas(Number(input));
	}

	public static removeCommasString(input: string): number | null {
		if (!input) return null;
		return removeCommas(String(input));
	}

	public static toRial(toman: number): number {
		return toman * 10;
	}
}