import { WorkCenterProductivityWhereInput } from "./WorkCenterProductivityWhereInput";
import { WorkCenterProductivityOrderByInput } from "./WorkCenterProductivityOrderByInput";

export type WorkCenterProductivityFindManyArgs = {
  where?: WorkCenterProductivityWhereInput;
  orderBy?: Array<WorkCenterProductivityOrderByInput>;
  skip?: number;
  take?: number;
};
