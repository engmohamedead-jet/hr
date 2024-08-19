import { PurchaseDetailWhereInput } from "./PurchaseDetailWhereInput";
import { PurchaseDetailOrderByInput } from "./PurchaseDetailOrderByInput";

export type PurchaseDetailFindManyArgs = {
  where?: PurchaseDetailWhereInput;
  orderBy?: Array<PurchaseDetailOrderByInput>;
  skip?: number;
  take?: number;
};
