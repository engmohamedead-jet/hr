import { ProductUnitWhereInput } from "./ProductUnitWhereInput";
import { ProductUnitOrderByInput } from "./ProductUnitOrderByInput";

export type ProductUnitFindManyArgs = {
  where?: ProductUnitWhereInput;
  orderBy?: Array<ProductUnitOrderByInput>;
  skip?: number;
  take?: number;
};
