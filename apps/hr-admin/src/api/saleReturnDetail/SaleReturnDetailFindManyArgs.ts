import { SaleReturnDetailWhereInput } from "./SaleReturnDetailWhereInput";
import { SaleReturnDetailOrderByInput } from "./SaleReturnDetailOrderByInput";

export type SaleReturnDetailFindManyArgs = {
  where?: SaleReturnDetailWhereInput;
  orderBy?: Array<SaleReturnDetailOrderByInput>;
  skip?: number;
  take?: number;
};
