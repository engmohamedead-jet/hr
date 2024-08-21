import { SalePersonWhereInput } from "./SalePersonWhereInput";
import { SalePersonOrderByInput } from "./SalePersonOrderByInput";

export type SalePersonFindManyArgs = {
  where?: SalePersonWhereInput;
  orderBy?: Array<SalePersonOrderByInput>;
  skip?: number;
  take?: number;
};
