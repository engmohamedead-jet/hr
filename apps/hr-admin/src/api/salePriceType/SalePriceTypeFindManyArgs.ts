import { SalePriceTypeWhereInput } from "./SalePriceTypeWhereInput";
import { SalePriceTypeOrderByInput } from "./SalePriceTypeOrderByInput";

export type SalePriceTypeFindManyArgs = {
  where?: SalePriceTypeWhereInput;
  orderBy?: Array<SalePriceTypeOrderByInput>;
  skip?: number;
  take?: number;
};
