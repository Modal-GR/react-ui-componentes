export interface IInput {
  onInputChange: ({ event: Event, field: Object }) => void;
  valid: Boolean;
  label: string;
  value?: string;
  type: string;
  id: string;
  style?: {
    labelColor?: String;
    labelColorError?: String;
    backgroundColor?: String;
    borderColor?: String;
    borderColorError?: String;
    fontColor?: String;
  };
}

export interface ILabel {
  htmlFor?: String;
  focus: Boolean;
  valid: Boolean;
}

export interface IInputContainer {
  valid: Boolean;
}
