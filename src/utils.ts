import { Err, Ok } from "./types";

export const ok = <DataType>(value: DataType): Ok<DataType> => ({
  ok: true,
  data: value,
});
export const err = <ErrorType>(value: ErrorType): Err<ErrorType> => ({
  ok: false,
  error: value,
});
