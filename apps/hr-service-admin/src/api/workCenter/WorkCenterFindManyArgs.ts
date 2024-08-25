import { WorkCenterWhereInput } from "./WorkCenterWhereInput";
import { WorkCenterOrderByInput } from "./WorkCenterOrderByInput";

export type WorkCenterFindManyArgs = {
  where?: WorkCenterWhereInput;
  orderBy?: Array<WorkCenterOrderByInput>;
  skip?: number;
  take?: number;
};
