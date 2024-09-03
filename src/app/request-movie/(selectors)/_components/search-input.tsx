import React from "react";

import { SearchIcon } from "@/components/icons";
import { Input, type InputProps } from "@/components/ui/input";

export default function SearchInput(props: InputProps) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-4 top-1/2 size-6 -translate-y-1/2 stroke-text" />
      <Input className="ps-14" {...props} />
    </div>
  );
}
