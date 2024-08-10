import { Decimal } from "decimal.js";
import { VoucherType } from "../voucherType/VoucherType";

export type ReceiptVoucher = {
  amount: Decimal;
  chequeDueDate: Date | null;
  chequeNumber: string | null;
  chequeValue: Decimal | null;
  createdAt: Date;
  id: string;
  note: string | null;
  receiptVoucherDate: Date;
  serialNumber: string | null;
  statementReference: string | null;
  updatedAt: Date;
  voucherTypeId?: VoucherType;
  wasChequePaid: boolean | null;
};
