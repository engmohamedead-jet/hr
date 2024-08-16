import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductionOrderListRelationFilter } from "../productionOrder/ProductionOrderListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type StoreWhereInput = {
  addressLine1?: StringNullableFilter;
  allowSale?: BooleanFilter;
  cellPhoneNumber?: StringNullableFilter;
  code?: StringNullableFilter;
  fax?: StringNullableFilter;
  homePhoneNumber?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  productionOrders?: ProductionOrderListRelationFilter;
  products?: ProductListRelationFilter;
  street?: StringNullableFilter;
};
