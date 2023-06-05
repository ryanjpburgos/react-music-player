import { environment } from "../environments/environments.dev";
import { MusicModel } from "../models/Music.model";
import { ResponseModel } from "../models/Response.model";

export const getMusicBySearchText: (
	text: string,
	url?: string
) => Promise<ResponseModel<MusicModel>> = async (
	text: string,
	url: string = `https://freesound.org/apiv2/search/text/?query=${text}&fields=id,previews,images,name,username,tags`
) => {
	try {
		const response: Response = await fetch(
			`${url}&token=${environment.apikey}`
		);
		const data: ResponseModel<MusicModel> = await response.json();
		return data;
	} catch (error: unknown) {
		throw error;
	}
};
