import { PurchaseReturnWhereInput } from "./PurchaseReturnWhereInput";
import { PurchaseReturnOrderByInput } from "./PurchaseReturnOrderByInput";

export type PurchaseReturnFindManyArgs = {
  where?: PurchaseReturnWhereInput;
  orderBy?: Array<PurchaseReturnOrderByInput>;
  skip?: number;
  take?: number;
};
