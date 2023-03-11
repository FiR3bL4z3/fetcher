import { FetcherState } from "./fetcher-state";
import { Result } from "./result";

export type QueryFunction<
  DataType,
  ErrorType,
  QueryFunctionInputType extends any[]
> = (...args: QueryFunctionInputType) => Result<DataType, ErrorType>;

export type FetcherQuery<
  DataType,
  ErrorType,
  QueryFunctionInputType extends any[]
> = (...args: QueryFunctionInputType) => {
  queryState: FetcherState<DataType, ErrorType>;
  refetch: () => void;
};
