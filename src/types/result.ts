export type Ok<DataType> = { ok: true; data: DataType };
export type Err<ErrorType> = { ok: false; error: ErrorType };

export type Result<DataType, ErrorType> = Promise<
  Ok<DataType> | Err<ErrorType>
>;
