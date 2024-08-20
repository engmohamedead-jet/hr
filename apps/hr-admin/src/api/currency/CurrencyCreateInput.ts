import { CustomerCreateNestedManyWithoutCurrenciesInput } from "./CustomerCreateNestedManyWithoutCurrenciesInput";
import { PaymentVoucherCreateNestedManyWithoutCurrenciesInput } from "./PaymentVoucherCreateNestedManyWithoutCurrenciesInput";
import { ReceiptVoucherCreateNestedManyWithoutCurrenciesInput } from "./ReceiptVoucherCreateNestedManyWithoutCurrenciesInput";
import { SalePaymentCreateNestedManyWithoutCurrenciesInput } from "./SalePaymentCreateNestedManyWithoutCurrenciesInput";
import { SupplierCreateNestedManyWithoutCurrenciesInput } from "./SupplierCreateNestedManyWithoutCurrenciesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CurrencyCreateInput = {
  code?: string | null;
  customers?: CustomerCreateNestedManyWithoutCurrenciesInput;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  paymentVouchers?: PaymentVoucherCreateNestedManyWithoutCurrenciesInput;
  receiptVouchers?: ReceiptVoucherCreateNestedManyWithoutCurrenciesInput;
  salePayments?: SalePaymentCreateNestedManyWithoutCurrenciesInput;
  suppliers?: SupplierCreateNestedManyWithoutCurrenciesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
