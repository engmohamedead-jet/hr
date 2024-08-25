import { WorkOrderStatusWhereInput } from "./WorkOrderStatusWhereInput";
import { WorkOrderStatusOrderByInput } from "./WorkOrderStatusOrderByInput";

export type WorkOrderStatusFindManyArgs = {
  where?: WorkOrderStatusWhereInput;
  orderBy?: Array<WorkOrderStatusOrderByInput>;
  skip?: number;
  take?: number;
};
