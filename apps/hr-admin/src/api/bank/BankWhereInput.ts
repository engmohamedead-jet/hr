import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BankBranchListRelationFilter } from "../bankBranch/BankBranchListRelationFilter";
import { BankTypeWhereUniqueInput } from "../bankType/BankTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { SalePaymentListRelationFilter } from "../salePayment/SalePaymentListRelationFilter";

export type BankWhereInput = {
  address?: StringNullableFilter;
  bankBranches?: BankBranchListRelationFilter;
  bankType?: BankTypeWhereUniqueInput;
  cellPhoneNumber?: StringNullableFilter;
  code?: StringNullableFilter;
  contactPhoneNumber?: StringNullableFilter;
  description?: StringNullableFilter;
  fax?: StringNullableFilter;
  homePhoneNumber?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  normalizedName?: StringNullableFilter;
  relationshipOfficerContactNumber?: StringNullableFilter;
  relationshipOfficerName?: StringNullableFilter;
  salePayments?: SalePaymentListRelationFilter;
  street?: StringNullableFilter;
};
