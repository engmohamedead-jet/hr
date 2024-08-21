import { SaleDetailWhereInput } from "./SaleDetailWhereInput";
import { SaleDetailOrderByInput } from "./SaleDetailOrderByInput";

export type SaleDetailFindManyArgs = {
  where?: SaleDetailWhereInput;
  orderBy?: Array<SaleDetailOrderByInput>;
  skip?: number;
  take?: number;
};
