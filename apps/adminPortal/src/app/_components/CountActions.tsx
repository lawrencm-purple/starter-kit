"use client";

import React from "react";

import { useCounterStore } from "~/stores/counter-store-provider";

type Props = {};

const CountActions = (props: Props) => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  );

  return (
    <div>
      Count: {count}
      <hr />
      <button type="button" onClick={() => void incrementCount()}>
        Increment Count
      </button>
      <button type="button" onClick={() => void decrementCount()}>
        Decrement Count
      </button>
    </div>
  );
};

export default CountActions;
