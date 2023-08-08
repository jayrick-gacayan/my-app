'use client';

import { ReactNode } from "react";
import { WithAuth } from "./HOC/with_auth";

function ClientHOCComponent({ children }: { children: ReactNode }) {
  return children;
}

export default WithAuth(ClientHOCComponent);