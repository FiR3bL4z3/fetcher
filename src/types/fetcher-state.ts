export type SuccessT<DataType> = {
	status: "success";
	data: DataType;
	isIdle: false;
	isError: false;
	isSuccess: true;
	isLoadingFromIdle: false;
	isLoadingFromError: false;
	isLoadingFromSuccess: false;
	isLoading: false;
};
export type ErrorT<ErrorType> = {
	status: "error";
	error: ErrorType;
	isIdle: false;
	isError: true;
	isSuccess: false;
	isLoadingFromIdle: false;
	isLoadingFromError: false;
	isLoadingFromSuccess: false;
	isLoading: false;
};
export type LoadingFromIdleT = {
	status: "loading-from-idle";
	isIdle: false;
	isError: false;
	isSuccess: false;
	isLoadingFromIdle: true;
	isLoadingFromError: false;
	isLoadingFromSuccess: false;
	isLoading: true;
};
export type LoadingFromSuccessT<DataType> = {
	status: "loading-from-success";
	previousData: DataType;
	isIdle: false;
	isError: false;
	isSuccess: false;
	isLoadingFromIdle: false;
	isLoadingFromError: false;
	isLoadingFromSuccess: true;
	isLoading: true;
};
export type LoadingFromErrorT<ErrorType> = {
	status: "loading-from-error";
	previousError: ErrorType;
	isIdle: false;
	isError: false;
	isSuccess: false;
	isLoadingFromIdle: false;
	isLoadingFromError: true;
	isLoadingFromSuccess: false;
	isLoading: true;
};
export type IdleT = {
	status: "idle";
	isIdle: true;
	isError: false;
	isSuccess: false;
	isLoadingFromIdle: false;
	isLoadingFromError: false;
	isLoadingFromSuccess: false;
	isLoading: false;
};

export type Status =
	| "success"
	| "error"
	| "loading-from-idle"
	| "loading-from-success"
	| "loading-from-error"
	| "idle";

export type FetcherState<DataType, ErrorType> =
	| SuccessT<DataType>
	| ErrorT<ErrorType>
	| LoadingFromIdleT
	| LoadingFromSuccessT<DataType>
	| LoadingFromErrorT<ErrorType>
	| IdleT;
