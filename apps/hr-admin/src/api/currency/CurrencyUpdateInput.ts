import { CustomerUpdateManyWithoutCurrenciesInput } from "./CustomerUpdateManyWithoutCurrenciesInput";
import { PaymentVoucherUpdateManyWithoutCurrenciesInput } from "./PaymentVoucherUpdateManyWithoutCurrenciesInput";
import { ReceiptVoucherUpdateManyWithoutCurrenciesInput } from "./ReceiptVoucherUpdateManyWithoutCurrenciesInput";
import { SalePaymentUpdateManyWithoutCurrenciesInput } from "./SalePaymentUpdateManyWithoutCurrenciesInput";
import { SupplierUpdateManyWithoutCurrenciesInput } from "./SupplierUpdateManyWithoutCurrenciesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CurrencyUpdateInput = {
  code?: string | null;
  customers?: CustomerUpdateManyWithoutCurrenciesInput;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  paymentVouchers?: PaymentVoucherUpdateManyWithoutCurrenciesInput;
  receiptVouchers?: ReceiptVoucherUpdateManyWithoutCurrenciesInput;
  salePayments?: SalePaymentUpdateManyWithoutCurrenciesInput;
  suppliers?: SupplierUpdateManyWithoutCurrenciesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
