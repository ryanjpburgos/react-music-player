export interface MusicModel {
	id: number;
	name: string;
	previews: Previews;
	username: string;
	tags: string[];
}

export interface Previews {
	"preview-hq-mp3": string;
	"preview-hq-ogg": string;
	"preview-lq-mp3": string;
	"preview-lq-ogg": string;
}
