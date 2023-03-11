import { FetcherState } from "./fetcher-state";
import { Result } from "./result";

export type MutationFunction<
  DataType,
  ErrorType,
  MutationFunctionInputType extends any[]
> = (...args: MutationFunctionInputType) => Result<DataType, ErrorType>;

export type FetcherMutation<
  DataType,
  ErrorType,
  MutationFunctionInputType extends any[]
> = () => {
  queryState: FetcherState<DataType, ErrorType>;
  mutate: (...args: MutationFunctionInputType) => void;
};
