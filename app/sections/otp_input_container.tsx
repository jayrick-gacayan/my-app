'use client';

import { OtpInputField } from "@/components/otp_input_field";
import { useState } from "react";

export function OtpInputContainer() {
  const [otp, setOtp] = useState<string>('');

  return (
    <div>
      <OtpInputField value={otp}
        length={6}
        onChange={(value: string) => { setOtp(value); }} />
    </div>
  )
}