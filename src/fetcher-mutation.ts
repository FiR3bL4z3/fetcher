import { useState } from "react";
import {
  FetcherState,
  FetcherMutation,
  MutationFunction,
  Options,
} from "./types";

export const fetcherMutation = <
  DataType,
  ErrorType,
  MutationFunctionInputType extends any[]
>(
  mutationFunction: MutationFunction<
    DataType,
    ErrorType,
    MutationFunctionInputType
  >,
  options?: Options<DataType, ErrorType>
): FetcherMutation<DataType, ErrorType, MutationFunctionInputType> => {
  return () => {
    const [queryState, setQueryState] = useState<
      FetcherState<DataType, ErrorType>
    >({
      status: "idle",
      isIdle: true,
      isError: false,
      isSuccess: false,
      isLoadingFromIdle: false,
      isLoadingFromError: false,
      isLoadingFromSuccess: false,
      isLoading: false,
    });

    const mutationFunctionExtended = async (
      ...args: MutationFunctionInputType
    ) => {
      if (queryState.status === "idle") {
        setQueryState({
          status: "loading-from-idle",
          isIdle: false,
          isError: false,
          isSuccess: false,
          isLoadingFromIdle: true,
          isLoadingFromError: false,
          isLoadingFromSuccess: false,
          isLoading: true,
        });
      }
      if (queryState.status === "error") {
        setQueryState({
          status: "loading-from-error",
          previousError: queryState.error,
          isIdle: false,
          isError: false,
          isSuccess: false,
          isLoadingFromIdle: false,
          isLoadingFromError: true,
          isLoadingFromSuccess: false,
          isLoading: true,
        });
      }
      if (queryState.status === "success") {
        setQueryState({
          status: "loading-from-success",
          previousData: queryState.data,
          isIdle: false,
          isError: false,
          isSuccess: false,
          isLoadingFromIdle: false,
          isLoadingFromError: false,
          isLoadingFromSuccess: true,
          isLoading: true,
        });
      }
      const result = await mutationFunction(...args);
      if (result.ok) {
        setQueryState({
          status: "success",
          data: result.data,
          isIdle: false,
          isError: false,
          isSuccess: true,
          isLoadingFromIdle: false,
          isLoadingFromError: false,
          isLoadingFromSuccess: false,
          isLoading: false,
        });
        options?.onSuccess !== undefined && options.onSuccess(result.data);
      } else {
        setQueryState({
          status: "error",
          error: result.error,
          isIdle: false,
          isError: true,
          isSuccess: false,
          isLoadingFromIdle: false,
          isLoadingFromError: false,
          isLoadingFromSuccess: false,
          isLoading: false,
        });
        options?.onError !== undefined && options.onError(result.error);
      }
    };

    const mutate = (...args: MutationFunctionInputType) => {
      if (
        queryState.status === "loading-from-idle" ||
        queryState.status === "loading-from-error" ||
        queryState.status === "loading-from-success"
      ) {
        return;
      }
      mutationFunctionExtended(...args);
    };

    return { queryState, mutate };
  };
};
