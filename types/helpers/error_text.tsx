import { ErrorType } from "../enums/error_type";

export function errorText(errorType: ErrorType, field: string) {
  switch (errorType) {
    case ErrorType.REQUIRED: return `${field} is required.`;
    case ErrorType.INVALID_FORMAT: return `${field} is in invalid format.`;
  }
  return '';
}