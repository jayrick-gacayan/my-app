import { ErrorStatus } from "../enums/error_status";

export interface TextInputField<T> {
  value: T;
  error: ErrorStatus;
  show?: boolean;
}

export function TextFieldInitValue<T>(value: T): TextInputField<T> {
  return {
    value: value,
    error: ErrorStatus.NONE
  }
}