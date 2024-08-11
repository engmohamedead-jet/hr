import { CashTransferWhereInput } from "./CashTransferWhereInput";
import { CashTransferOrderByInput } from "./CashTransferOrderByInput";

export type CashTransferFindManyArgs = {
  where?: CashTransferWhereInput;
  orderBy?: Array<CashTransferOrderByInput>;
  skip?: number;
  take?: number;
};
