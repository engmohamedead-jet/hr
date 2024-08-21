import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PrintTemplateContentWhereUniqueInput } from "../printTemplateContent/PrintTemplateContentWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PrintTemplateWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isCustomized?: BooleanFilter;
  isFavourite?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  paperLayout?: "Portrait" | "Landscape";
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
    | "B6";
  previewImage?: JsonFilter;
  printTemplateContents?: PrintTemplateContentWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
};
