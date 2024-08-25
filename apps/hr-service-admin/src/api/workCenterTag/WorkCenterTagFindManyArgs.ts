import { WorkCenterTagWhereInput } from "./WorkCenterTagWhereInput";
import { WorkCenterTagOrderByInput } from "./WorkCenterTagOrderByInput";

export type WorkCenterTagFindManyArgs = {
  where?: WorkCenterTagWhereInput;
  orderBy?: Array<WorkCenterTagOrderByInput>;
  skip?: number;
  take?: number;
};
