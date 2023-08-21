import { useState } from "react";

export function useToggle() {
  const [toggle, setToggle] = useState(true);
  return { toggle, setToggle };
}