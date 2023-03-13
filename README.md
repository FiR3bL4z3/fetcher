# qvery

Easy queries and mutations for [React](https://reactjs.org)

## Documentation

### Import

```ts
import { query, mutation } from "qvery";
import { ok, err } from "qvery";
```

### Functions

#### query

```tsx
import React, { FC } from "react";
import { err, ok, query } from "./dist";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}

const getEvents = async (id: number) => {
  console.log("Fetching data...");
  const _ = await timeout(3000);
  if (Math.random() > 0.5) {
    return ok([
      {
        name: "Event name",
        id: id,
        speakers: ["Dr. Person Man", "Person Woman PhD"],
      },
    ]);
  } else {
    return err({
      code: 404,
      message: "Event not found!",
    });
  }
};

const useGetEvents = query(getEvents);

const Component: FC = () => {
  const getEventsQuery = useGetEvents(1234);
  const status = getEventsQuery.status;

  switch (status) {
    case "error":
      return <>{JSON.stringify(getEventsQuery.error, null, 2)}</>;
    case "idle":
      return <>Idle...</>;
    case "loading-from-error":
      return <>{JSON.stringify(getEventsQuery.previousError, null, 2)}</>;
    case "loading-from-success":
      return <>{JSON.stringify(getEventsQuery.previousData, null, 2)}</>;
    case "loading-from-idle":
      return <>Idle...</>;
    case "success":
      return <>{JSON.stringify(getEventsQuery.data, null, 2)}</>;
  }
};
```

#### mutation

#### ok

#### err
