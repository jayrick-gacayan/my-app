import { useState } from "react";

export function useSwitch() {
  const [on, setOn] = useState<boolean>(false);
  return {
    on, setOn
  }
}