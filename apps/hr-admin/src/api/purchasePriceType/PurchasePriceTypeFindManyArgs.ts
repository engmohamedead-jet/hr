import { PurchasePriceTypeWhereInput } from "./PurchasePriceTypeWhereInput";
import { PurchasePriceTypeOrderByInput } from "./PurchasePriceTypeOrderByInput";

export type PurchasePriceTypeFindManyArgs = {
  where?: PurchasePriceTypeWhereInput;
  orderBy?: Array<PurchasePriceTypeOrderByInput>;
  skip?: number;
  take?: number;
};
