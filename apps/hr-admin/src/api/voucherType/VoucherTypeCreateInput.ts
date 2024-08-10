import { ReceiptVoucherCreateNestedManyWithoutVoucherTypesInput } from "./ReceiptVoucherCreateNestedManyWithoutVoucherTypesInput";

export type VoucherTypeCreateInput = {
  code: string;
  description?: string | null;
  name: string;
  normalizedName?: string | null;
  note?: string | null;
  receiptVouchers?: ReceiptVoucherCreateNestedManyWithoutVoucherTypesInput;
};
