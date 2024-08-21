import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentVoucherListRelationFilter } from "../paymentVoucher/PaymentVoucherListRelationFilter";
import { ReceiptVoucherListRelationFilter } from "../receiptVoucher/ReceiptVoucherListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type VoucherTypeWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  paymentVouchers?: PaymentVoucherListRelationFilter;
  receiptVouchers?: ReceiptVoucherListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
};
