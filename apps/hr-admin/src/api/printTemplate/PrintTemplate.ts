import { JsonValue } from "type-fest";
import { PrintTemplateContent } from "../printTemplateContent/PrintTemplateContent";
import { Tenant } from "../tenant/Tenant";

export type PrintTemplate = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  filePath: string | null;
  id: string;
  isActive: boolean | null;
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
  tenantId?: Tenant | null;
  updatedAt: Date;
};
