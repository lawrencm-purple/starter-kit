"use client";

import React from "react";

import { useCounterStore } from "~/stores/counter-store-provider";

type Props = {};

const StateTest = (props: Props) => {
  const { count } = useCounterStore((state) => state);

  return <div>StateTest: {count}</div>;
};

export default StateTest;
