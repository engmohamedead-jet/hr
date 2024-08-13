import { JsonValue } from "type-fest";
import { PrintTemplateContent } from "../printTemplateContent/PrintTemplateContent";
import { PrintTemplateGroup } from "../printTemplateGroup/PrintTemplateGroup";

export type PrintTemplate = {
  Description: string | null;
  code: string | null;
  createdAt: Date;
  filePath: string | null;
  id: number;
  isCustomized: boolean | null;
  isFavourite: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  paperLayout?: "Portrait" | "Landscape" | null;
  paperSize?: "A1" | "A2" | "A3" | "A4" | "A5" | null;
  previewImage: JsonValue;
  printTemplateContents?: Array<PrintTemplateContent>;
  printTemplateGroupId?: PrintTemplateGroup;
  updatedAt: Date;
};
