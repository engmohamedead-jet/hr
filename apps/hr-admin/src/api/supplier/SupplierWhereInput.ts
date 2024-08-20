import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PaymentVoucherListRelationFilter } from "../paymentVoucher/PaymentVoucherListRelationFilter";
import { PurchaseReturnListRelationFilter } from "../purchaseReturn/PurchaseReturnListRelationFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SupplierWhereInput = {
  address?: StringNullableFilter;
  code?: StringNullableFilter;
  credit?: DecimalNullableFilter;
  currency?: CurrencyWhereUniqueInput;
  customerId?: CustomerWhereUniqueInput;
  debit?: DecimalNullableFilter;
  description?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  paymentVouchers?: PaymentVoucherListRelationFilter;
  phoneNumber?: StringNullableFilter;
  purchaseReturns?: PurchaseReturnListRelationFilter;
  purchases?: PurchaseListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
  website?: StringNullableFilter;
};
