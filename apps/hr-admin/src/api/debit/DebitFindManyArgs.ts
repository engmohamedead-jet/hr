import { DebitWhereInput } from "./DebitWhereInput";
import { DebitOrderByInput } from "./DebitOrderByInput";

export type DebitFindManyArgs = {
  where?: DebitWhereInput;
  orderBy?: Array<DebitOrderByInput>;
  skip?: number;
  take?: number;
};
