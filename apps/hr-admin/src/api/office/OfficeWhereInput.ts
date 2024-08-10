import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { StoreListRelationFilter } from "../store/StoreListRelationFilter";

export type OfficeWhereInput = {
  address?: StringNullableFilter;
  cellPhoneNumber?: StringNullableFilter;
  code?: StringFilter;
  description?: StringNullableFilter;
  fax?: StringNullableFilter;
  homePhoneNumber?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  stores?: StoreListRelationFilter;
};
