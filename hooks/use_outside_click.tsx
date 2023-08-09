import { useEffect } from "react";

export function useOutsideClick(ref: any, onEvent: () => void) {

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [ref]);

  function handleClickOutside(event: any) {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      onEvent();
    }
  }
}