import { SaleReturnWhereInput } from "./SaleReturnWhereInput";
import { SaleReturnOrderByInput } from "./SaleReturnOrderByInput";

export type SaleReturnFindManyArgs = {
  where?: SaleReturnWhereInput;
  orderBy?: Array<SaleReturnOrderByInput>;
  skip?: number;
  take?: number;
};
