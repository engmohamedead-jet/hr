import { JobTitleWhereInput } from "./JobTitleWhereInput";
import { JobTitleOrderByInput } from "./JobTitleOrderByInput";

export type JobTitleFindManyArgs = {
  where?: JobTitleWhereInput;
  orderBy?: Array<JobTitleOrderByInput>;
  skip?: number;
  take?: number;
};
