import { InputJsonValue } from "../../types";
import { PrintTemplateContentCreateNestedManyWithoutPrintTemplatesInput } from "./PrintTemplateContentCreateNestedManyWithoutPrintTemplatesInput";
import { PrintTemplateGroupWhereUniqueInput } from "../printTemplateGroup/PrintTemplateGroupWhereUniqueInput";

export type PrintTemplateCreateInput = {
  Description?: string | null;
  code?: string | null;
  filePath?: string | null;
  isCustomized?: boolean | null;
  isFavourite?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  paperLayout?: "Portrait" | "Landscape" | null;
  paperSize?: "A1" | "A2" | "A3" | "A4" | "A5" | null;
  previewImage?: InputJsonValue;
  printTemplateContents?: PrintTemplateContentCreateNestedManyWithoutPrintTemplatesInput;
  printTemplateGroupId: PrintTemplateGroupWhereUniqueInput;
};
