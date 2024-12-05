"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@com/ui";

type ErrorProps = {
  error: Error & { digest?: string; code?: string };
  reset: () => void;
  imageUrl: string;
};

const Error: React.FC<ErrorProps> = ({ error, reset, imageUrl }) => {
  const [err, setErr] = useState<string | null>();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    setErr(error.message);
    console.log(error);
  }, [error]);

  return (
    <div className="container mx-auto flex flex-col items-center space-y-4 align-middle">
      <Image
        src={imageUrl}
        alt="Something has gone wrong"
        width={800}
        height={400}
      />
      <h2 className="text-5xl font-extrabold">Something went wrong!</h2>
      <p>{err}</p>

      <Button
        variant={"outline"}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
};

export { Error };
