import { TextInputField } from "./text_input_field";

export interface LoginOptions {
  email: TextInputField<string>;
  password: TextInputField<string>;
}