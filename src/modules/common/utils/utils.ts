import {addCommas, removeCommas} from '@persian-tools/persian-tools';

export class Utils {
	public static addCommasNumber(input: number): string | null {
		if (!input) return null;
		return addCommas(input);
	}

	public static removeCommasString(input: string): number | null {
		if (!input) return null;
		return removeCommas(input);
	}
}