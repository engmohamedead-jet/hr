import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PrintTemplateWhereUniqueInput } from "../printTemplate/PrintTemplateWhereUniqueInput";

export type PrintTemplateContentWhereInput = {
  display?: StringNullableFilter;
  fieldValue?: StringFilter;
  id?: StringFilter;
  key?: StringFilter;
  note?: StringNullableFilter;
  printTemplate?: PrintTemplateWhereUniqueInput;
  value?: StringFilter;
};
