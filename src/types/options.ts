export type Options<DataType, ErrorType> = {
  onSuccess?: (data: DataType) => void;
  onError?: (error: ErrorType) => void;
};

export type QueryOptions<DataType, ErrorType> = Options<DataType, ErrorType> & {
  fetchByDefault?: boolean;
};
