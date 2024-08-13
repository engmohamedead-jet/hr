import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PrintTemplateContentListRelationFilter } from "../printTemplateContent/PrintTemplateContentListRelationFilter";
import { PrintTemplateGroupWhereUniqueInput } from "../printTemplateGroup/PrintTemplateGroupWhereUniqueInput";

export type PrintTemplateWhereInput = {
  Description?: StringNullableFilter;
  code?: StringNullableFilter;
  filePath?: StringNullableFilter;
  id?: IntFilter;
  isCustomized?: BooleanNullableFilter;
  isFavourite?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  paperLayout?: "Portrait" | "Landscape";
  paperSize?: "A1" | "A2" | "A3" | "A4" | "A5";
  previewImage?: JsonFilter;
  printTemplateContents?: PrintTemplateContentListRelationFilter;
  printTemplateGroupId?: PrintTemplateGroupWhereUniqueInput;
};
