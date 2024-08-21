import { SaleOrderWhereInput } from "./SaleOrderWhereInput";
import { SaleOrderOrderByInput } from "./SaleOrderOrderByInput";

export type SaleOrderFindManyArgs = {
  where?: SaleOrderWhereInput;
  orderBy?: Array<SaleOrderOrderByInput>;
  skip?: number;
  take?: number;
};
