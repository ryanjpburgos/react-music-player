export interface ResponseModel<T> {
	count: number;
	previous: any;
	next: string;
	results: T[];
}
