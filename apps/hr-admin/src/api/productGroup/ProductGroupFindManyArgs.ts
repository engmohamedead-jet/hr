import { ProductGroupWhereInput } from "./ProductGroupWhereInput";
import { ProductGroupOrderByInput } from "./ProductGroupOrderByInput";

export type ProductGroupFindManyArgs = {
  where?: ProductGroupWhereInput;
  orderBy?: Array<ProductGroupOrderByInput>;
  skip?: number;
  take?: number;
};
