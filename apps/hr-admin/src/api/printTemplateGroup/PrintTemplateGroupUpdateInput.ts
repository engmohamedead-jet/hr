import { PrintTemplateUpdateManyWithoutPrintTemplateGroupsInput } from "./PrintTemplateUpdateManyWithoutPrintTemplateGroupsInput";

export type PrintTemplateGroupUpdateInput = {
  code?: string | null;
  description?: string | null;
  name?: string | null;
  normalizedName?: string;
  note?: string | null;
  printTemplates?: PrintTemplateUpdateManyWithoutPrintTemplateGroupsInput;
};
