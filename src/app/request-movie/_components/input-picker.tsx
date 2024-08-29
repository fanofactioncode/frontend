import React from "react";

export interface InputPickerProps {}

export default function InputPicker() {
  return (
    <div className="flex flex-col gap-2 sm:flex-1">
      <div className="flex flex-row items-center gap-2">
        {/* <MovieIcon size={18} color="#B9F18C" /> */}
        <p className="text-base text-text font-semibold">Movie</p>
        {/* <ArrowDownIcon
          size={18}
          color="black"
          className="fill-primary stroke-primary"
        /> */}
      </div>
      <p className="text-text-sub">Which movie do you want to see ?</p>
    </div>
  );
}
