import { PrintTemplateWhereUniqueInput } from "../printTemplate/PrintTemplateWhereUniqueInput";

export type PrintTemplateContentCreateInput = {
  display?: string | null;
  fieldValue: string;
  key: string;
  note?: string | null;
  printTemplateId?: PrintTemplateWhereUniqueInput | null;
  value: string;
};
