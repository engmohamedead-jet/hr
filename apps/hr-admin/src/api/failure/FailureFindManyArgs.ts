import { FailureWhereInput } from "./FailureWhereInput";
import { FailureOrderByInput } from "./FailureOrderByInput";

export type FailureFindManyArgs = {
  where?: FailureWhereInput;
  orderBy?: Array<FailureOrderByInput>;
  skip?: number;
  take?: number;
};
