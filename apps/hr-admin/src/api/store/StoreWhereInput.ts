import { AccountTransactionDetailListRelationFilter } from "../accountTransactionDetail/AccountTransactionDetailListRelationFilter";
import { AccountTransactionListRelationFilter } from "../accountTransaction/AccountTransactionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { StoreTypeWhereUniqueInput } from "../storeType/StoreTypeWhereUniqueInput";

export type StoreWhereInput = {
  accountTransactionDetails?: AccountTransactionDetailListRelationFilter;
  accountTransactions?: AccountTransactionListRelationFilter;
  addressLine1?: StringNullableFilter;
  allowSale?: BooleanFilter;
  cellPhoneNumber?: StringNullableFilter;
  code?: StringFilter;
  fax?: StringNullableFilter;
  homePhoneNumber?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  office?: OfficeWhereUniqueInput;
  storeType?: StoreTypeWhereUniqueInput;
  street?: StringNullableFilter;
};
