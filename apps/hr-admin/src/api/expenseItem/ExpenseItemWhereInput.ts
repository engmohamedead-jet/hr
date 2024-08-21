import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PaymentVoucherListRelationFilter } from "../paymentVoucher/PaymentVoucherListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ExpenseItemWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  paymentVouchers?: PaymentVoucherListRelationFilter;
  tenant?: TenantWhereUniqueInput;
};
