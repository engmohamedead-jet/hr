import { ProductGroupListRelationFilter } from "../productGroup/ProductGroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { AccountListRelationFilter } from "./AccountListRelationFilter";

export type AccountWhereInput = {
  SaleReturnAccountProductGroups?: ProductGroupListRelationFilter;
  accountNumber?: StringFilter;
  aleAccountProductGroups?: ProductGroupListRelationFilter;
  costOfGoodsSoldAccountProductGroups?: ProductGroupListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  inventoryAccountProductGroups?: ProductGroupListRelationFilter;
  isMasterAccount?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  parentAccountId?: AccountWhereUniqueInput;
  parentAccounts?: AccountListRelationFilter;
  purchaseAccountProductGroups?: ProductGroupListRelationFilter;
  purchaseDiscountAccountProductGroups?: ProductGroupListRelationFilter;
  purchaseReturnAccountProductGroups?: ProductGroupListRelationFilter;
  saleDiscountAccountProductGroups?: ProductGroupListRelationFilter;
};
