import { ReceiptVoucherUpdateManyWithoutVoucherTypesInput } from "./ReceiptVoucherUpdateManyWithoutVoucherTypesInput";

export type VoucherTypeUpdateInput = {
  code?: string;
  description?: string | null;
  name?: string;
  normalizedName?: string | null;
  note?: string | null;
  receiptVouchers?: ReceiptVoucherUpdateManyWithoutVoucherTypesInput;
};
