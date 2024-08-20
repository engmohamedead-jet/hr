import { TimeoffTypeWhereInput } from "./TimeoffTypeWhereInput";
import { TimeoffTypeOrderByInput } from "./TimeoffTypeOrderByInput";

export type TimeoffTypeFindManyArgs = {
  where?: TimeoffTypeWhereInput;
  orderBy?: Array<TimeoffTypeOrderByInput>;
  skip?: number;
  take?: number;
};
