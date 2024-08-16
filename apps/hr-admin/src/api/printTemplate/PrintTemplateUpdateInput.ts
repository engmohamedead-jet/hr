import { InputJsonValue } from "../../types";
import { PrintTemplateContentWhereUniqueInput } from "../printTemplateContent/PrintTemplateContentWhereUniqueInput";

export type PrintTemplateUpdateInput = {
  code?: string | null;
  description?: string | null;
  filePath?: string | null;
  isCustomized?: boolean;
  isFavourite?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
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
  previewImage?: InputJsonValue;
  printTemplateContents?: PrintTemplateContentWhereUniqueInput | null;
};
