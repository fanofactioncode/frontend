import React from "react";

import { ArrowDownIcon, IconElement } from "@/components/icons";

export interface ItemPickerProps {
  Icon: IconElement;
  title: string;
  text: string;
  onClick?: () => void;
}

export default function ItemPicker({
  Icon,
  title,
  text,
  onClick,
}: ItemPickerProps) {
  return (
    <div
      className="flex cursor-pointer flex-col gap-2 p-6 sm:flex-1"
      onClick={onClick}
    >
      <div className="flex flex-row items-center gap-2">
        <Icon size={18} color="#B9F18C" />
        <p className="select-none text-base font-semibold text-text">{title}</p>
        <ArrowDownIcon
          size={18}
          color="black"
          className="fill-primary stroke-primary"
        />
      </div>
      <p className="select-none text-text-sub">{text}</p>
    </div>
  );
}
