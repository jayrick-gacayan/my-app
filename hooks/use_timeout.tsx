import { MutableRefObject, useEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number | null) {
  let savedCallback: MutableRefObject<() => void> = useRef(callback);

  useEffect(() => {
    if (!delay && delay !== 0) return;

    let id: NodeJS.Timeout = setTimeout(() => { savedCallback.current() }, delay);

    return () => clearTimeout(id);
  }, [delay])
}