import { BillOfMaterialTypeWhereInput } from "./BillOfMaterialTypeWhereInput";
import { BillOfMaterialTypeOrderByInput } from "./BillOfMaterialTypeOrderByInput";

export type BillOfMaterialTypeFindManyArgs = {
  where?: BillOfMaterialTypeWhereInput;
  orderBy?: Array<BillOfMaterialTypeOrderByInput>;
  skip?: number;
  take?: number;
};
