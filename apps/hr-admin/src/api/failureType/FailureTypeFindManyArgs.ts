import { FailureTypeWhereInput } from "./FailureTypeWhereInput";
import { FailureTypeOrderByInput } from "./FailureTypeOrderByInput";

export type FailureTypeFindManyArgs = {
  where?: FailureTypeWhereInput;
  orderBy?: Array<FailureTypeOrderByInput>;
  skip?: number;
  take?: number;
};
