import { ReceiptVoucherWhereInput } from "./ReceiptVoucherWhereInput";
import { ReceiptVoucherOrderByInput } from "./ReceiptVoucherOrderByInput";

export type ReceiptVoucherFindManyArgs = {
  where?: ReceiptVoucherWhereInput;
  orderBy?: Array<ReceiptVoucherOrderByInput>;
  skip?: number;
  take?: number;
};
