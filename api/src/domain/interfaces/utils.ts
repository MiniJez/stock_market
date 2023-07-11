export type RequireAtLeastOne<T> = { [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>; }[keyof T]

export interface HttpResponse {
    data: any;
}

export interface TypedResponse<T> extends HttpResponse {
	data: T;
}