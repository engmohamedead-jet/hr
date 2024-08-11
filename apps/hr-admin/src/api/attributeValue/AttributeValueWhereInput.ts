import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AttributeValueWhereInput = {
  attributeId?: AttributeWhereUniqueInput;
  id?: StringFilter;
  note?: StringNullableFilter;
  value?: StringNullableFilter;
};
