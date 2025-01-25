import { useEffect, useRef } from "react";

export interface UseClickOutsideProps {
  onClickOutside: () => void;
}

export function useClickOutside<T extends HTMLElement>({
  onClickOutside,
}: UseClickOutsideProps) {
  const ref = useRef<T>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return ref;
}
