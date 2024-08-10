import { Decimal } from "decimal.js";
import { VoucherTypeWhereUniqueInput } from "../voucherType/VoucherTypeWhereUniqueInput";

export type ReceiptVoucherCreateInput = {
  amount: Decimal;
  chequeDueDate?: Date | null;
  chequeNumber?: string | null;
  chequeValue?: Decimal | null;
  note?: string | null;
  receiptVoucherDate: Date;
  serialNumber?: string | null;
  statementReference?: string | null;
  voucherTypeId: VoucherTypeWhereUniqueInput;
  wasChequePaid?: boolean | null;
};
