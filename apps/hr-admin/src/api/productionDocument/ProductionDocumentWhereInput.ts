import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductionDocumentWhereInput = {
  id?: StringFilter;
  isActive?: BooleanFilter;
  note?: StringNullableFilter;
  priority?: StringNullableFilter;
};
