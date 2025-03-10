export interface IFormElement {
  id: string;
  name?: string;
  type: string;
  placeholder?: string;
  data?: string[]
  optional?: boolean;
  value?: string;
}