import { BillOfMaterialWhereInput } from "./BillOfMaterialWhereInput";
import { BillOfMaterialOrderByInput } from "./BillOfMaterialOrderByInput";

export type BillOfMaterialFindManyArgs = {
  where?: BillOfMaterialWhereInput;
  orderBy?: Array<BillOfMaterialOrderByInput>;
  skip?: number;
  take?: number;
};
