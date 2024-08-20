import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BankWhereUniqueInput } from "../bank/BankWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { SalePaymentListRelationFilter } from "../salePayment/SalePaymentListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BankBranchWhereInput = {
  address?: StringNullableFilter;
  bank?: BankWhereUniqueInput;
  code?: StringNullableFilter;
  contactPhoneNumber?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  salePayments?: SalePaymentListRelationFilter;
  tenant?: TenantWhereUniqueInput;
};
