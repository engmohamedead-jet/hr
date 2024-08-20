import { PaymentVoucherCreateNestedManyWithoutVoucherTypesInput } from "./PaymentVoucherCreateNestedManyWithoutVoucherTypesInput";
import { ReceiptVoucherCreateNestedManyWithoutVoucherTypesInput } from "./ReceiptVoucherCreateNestedManyWithoutVoucherTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type VoucherTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  paymentVouchers?: PaymentVoucherCreateNestedManyWithoutVoucherTypesInput;
  receiptVouchers?: ReceiptVoucherCreateNestedManyWithoutVoucherTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
