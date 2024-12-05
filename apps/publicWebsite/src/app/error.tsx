"use client";

import React, { useEffect, useState } from "react";
import { Error as ErrorComponent } from "@com/ui";

import failshark from "../../public/failshark.png";

type ErrorProps = {
  error: Error & { digest?: string; code?: string };
  reset: () => void;
};

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <ErrorComponent error={error} reset={reset} imageUrl={failshark.src} />
  );
};

export default Error;
