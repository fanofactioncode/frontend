import React from "react";

import { ArrowDownIcon, IconElement } from "@/components/icons";

export interface ItemPickerProps {
  Icon: IconElement;
  title: string;
  text: string;
}

export default function ItemPicker({ Icon, title, text }: ItemPickerProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-1">
      <div className="flex flex-row items-center gap-2">
        <Icon size={18} color="#B9F18C" />
        <p className="text-base font-semibold text-text">{title}</p>
        <ArrowDownIcon
          size={18}
          color="black"
          className="fill-primary stroke-primary"
        />
      </div>
      <p className="text-text-sub">{text}</p>
    </div>
  );
}
