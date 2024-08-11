import { StringFilter } from "../../util/StringFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RatingWhereInput = {
  code?: StringFilter;
  customers?: CustomerListRelationFilter;
  guarantorRatingI?: CustomerListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
