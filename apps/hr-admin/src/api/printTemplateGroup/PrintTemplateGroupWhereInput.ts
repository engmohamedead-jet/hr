import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { PrintTemplateListRelationFilter } from "../printTemplate/PrintTemplateListRelationFilter";

export type PrintTemplateGroupWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringNullableFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  printTemplates?: PrintTemplateListRelationFilter;
};
