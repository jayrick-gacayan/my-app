import { useState } from "react";

export function useModal() {
  const [isShowing, setIsShowing] = useState(false);

  return {
    isShowing,
    setIsShowing,
  }
}