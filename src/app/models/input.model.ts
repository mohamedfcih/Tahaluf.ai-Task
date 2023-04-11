export interface InputValue {
  fontSize: string;
  fontColor: string;
  name: string;
}

export interface TextBox extends InputValue {
  label: string;
  placeholder: string;
}

export interface Button extends InputValue {
  bgColor: string;
  title: string;
}
export interface Textarea extends InputValue {
  cols: string;
  label: string;
  placeholder: string;
}
export interface selectBox extends InputValue {
  label: string;
}
