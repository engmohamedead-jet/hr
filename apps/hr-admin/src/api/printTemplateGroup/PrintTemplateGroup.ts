import { PrintTemplate } from "../printTemplate/PrintTemplate";

export type PrintTemplateGroup = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  name: string | null;
  normalizedName: string;
  note: string | null;
  printTemplates?: Array<PrintTemplate>;
  updatedAt: Date;
};
