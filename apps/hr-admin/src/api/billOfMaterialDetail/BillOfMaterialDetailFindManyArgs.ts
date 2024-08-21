import { BillOfMaterialDetailWhereInput } from "./BillOfMaterialDetailWhereInput";
import { BillOfMaterialDetailOrderByInput } from "./BillOfMaterialDetailOrderByInput";

export type BillOfMaterialDetailFindManyArgs = {
  where?: BillOfMaterialDetailWhereInput;
  orderBy?: Array<BillOfMaterialDetailOrderByInput>;
  skip?: number;
  take?: number;
};
