import * as cheerio from 'cheerio';

export class Token {
	public static withdrawToken(data: string): string | null {
		const $ = cheerio.load(data);
		const scriptContent = $('script:contains("param")').text();
		const matchResult = scriptContent && scriptContent.match(/param\s*[=:]\s*"(.+)"/);
		return matchResult ? matchResult[1] : null;
	}
}