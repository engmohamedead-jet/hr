import { PrintTemplate } from "../printTemplate/PrintTemplate";

export type PrintTemplateContent = {
  createdAt: Date;
  display: string | null;
  fieldValue: string;
  id: string;
  key: string;
  note: string | null;
  printTemplate?: PrintTemplate | null;
  updatedAt: Date;
  value: string;
};
