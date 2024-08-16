import { JsonValue } from "type-fest";
import { PrintTemplateContent } from "../printTemplateContent/PrintTemplateContent";

export type PrintTemplate = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  filePath: string | null;
  id: string;
  isCustomized: boolean;
  isFavourite: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  paperLayout?: "Portrait" | "Landscape" | null;
  paperSize?:
    | "A1"
    | "A2"
    | "A3"
    | "A4"
    | "A5"
    | "A6"
    | "B1"
    | "B2"
    | "B3"
    | "B5"
    | "B6"
    | null;
  previewImage: JsonValue;
  printTemplateContents?: PrintTemplateContent | null;
  updatedAt: Date;
};
