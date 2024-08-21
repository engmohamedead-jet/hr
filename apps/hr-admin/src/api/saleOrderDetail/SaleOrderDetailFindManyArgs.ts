import { SaleOrderDetailWhereInput } from "./SaleOrderDetailWhereInput";
import { SaleOrderDetailOrderByInput } from "./SaleOrderDetailOrderByInput";

export type SaleOrderDetailFindManyArgs = {
  where?: SaleOrderDetailWhereInput;
  orderBy?: Array<SaleOrderDetailOrderByInput>;
  skip?: number;
  take?: number;
};
