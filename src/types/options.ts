export type Options<
  DataType,
  ErrorType,
  FunctionInputType extends readonly any[]
> = {
  onSuccess?: (data: DataType, ...originalArgs: FunctionInputType) => void;
  onError?: (error: ErrorType, ...originalArgs: FunctionInputType) => void;
};

export type QueryOptions<
  DataType,
  ErrorType,
  FunctionInputType extends readonly any[]
> = Options<DataType, ErrorType, FunctionInputType> & {
  fetchByDefault?: boolean;
};
