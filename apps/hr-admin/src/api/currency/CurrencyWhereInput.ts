import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PaymentVoucherListRelationFilter } from "../paymentVoucher/PaymentVoucherListRelationFilter";
import { ReceiptVoucherListRelationFilter } from "../receiptVoucher/ReceiptVoucherListRelationFilter";
import { SalePaymentListRelationFilter } from "../salePayment/SalePaymentListRelationFilter";
import { SupplierListRelationFilter } from "../supplier/SupplierListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CurrencyWhereInput = {
  code?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  paymentVouchers?: PaymentVoucherListRelationFilter;
  receiptVouchers?: ReceiptVoucherListRelationFilter;
  salePayments?: SalePaymentListRelationFilter;
  suppliers?: SupplierListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
};
