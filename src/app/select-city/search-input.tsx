import { SearchIcon } from "@/components/icons";
import { Input, type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function SearchInput({ className, ...props }: InputProps) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-4 top-1/2 size-6 -translate-y-1/2 stroke-text" />
      <Input className={cn("!border !pl-14", className)} {...props} />
    </div>
  );
}
