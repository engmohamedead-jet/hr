import { PrintTemplateCreateNestedManyWithoutPrintTemplateGroupsInput } from "./PrintTemplateCreateNestedManyWithoutPrintTemplateGroupsInput";

export type PrintTemplateGroupCreateInput = {
  code?: string | null;
  description?: string | null;
  name?: string | null;
  normalizedName: string;
  note?: string | null;
  printTemplates?: PrintTemplateCreateNestedManyWithoutPrintTemplateGroupsInput;
};
