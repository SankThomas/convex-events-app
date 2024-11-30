import { Loader } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <Loader className="mx-auto block size-9 animate-spin text-neutral-400" />
    </div>
  );
}
