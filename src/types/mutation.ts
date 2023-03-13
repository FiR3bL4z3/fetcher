import { FetcherState } from "./fetcher-state";
import { Result } from "./result";

export type MutationFunction<
  DataType,
  ErrorType,
  MutationFunctionInputType extends readonly any[]
> = (...args: MutationFunctionInputType) => Result<DataType, ErrorType>;

export type Mutation<
  DataType,
  ErrorType,
  MutationFunctionInputType extends readonly any[]
> = () => FetcherState<DataType, ErrorType> & {
  mutate: (...args: MutationFunctionInputType) => void;
};
