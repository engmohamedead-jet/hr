import { AttributeValueListRelationFilter } from "../attributeValue/AttributeValueListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type AttributeWhereInput = {
  attributeValues?: AttributeValueListRelationFilter;
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
