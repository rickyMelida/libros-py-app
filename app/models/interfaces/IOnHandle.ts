import { ChangeEventHandler } from "react";

export interface IOnHandle {
    (event: React.MouseEvent<HTMLButtonElement>): void;
  }