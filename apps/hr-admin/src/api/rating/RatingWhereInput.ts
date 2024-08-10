import { StringFilter } from "../../util/StringFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RatingWhereInput = {
  code?: StringFilter;
  customers?: CustomerListRelationFilter;
  guarantorRatingI?: CustomerListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
