import { PaymentVoucherUpdateManyWithoutVoucherTypesInput } from "./PaymentVoucherUpdateManyWithoutVoucherTypesInput";
import { ReceiptVoucherUpdateManyWithoutVoucherTypesInput } from "./ReceiptVoucherUpdateManyWithoutVoucherTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type VoucherTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  paymentVouchers?: PaymentVoucherUpdateManyWithoutVoucherTypesInput;
  receiptVouchers?: ReceiptVoucherUpdateManyWithoutVoucherTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
