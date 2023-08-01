import { type SubmitHandler } from "react-hook-form";

export interface IBlogForm {
  onSubmit: SubmitHandler<IFormInput>;
}

export interface IFormInput {
  title: string;
  content: string;
}

export interface IBlog {
  id?: string;
  title: string;
  content: string;
  createdAt: Date;
}
