import { ScrapReasonWhereInput } from "./ScrapReasonWhereInput";
import { ScrapReasonOrderByInput } from "./ScrapReasonOrderByInput";

export type ScrapReasonFindManyArgs = {
  where?: ScrapReasonWhereInput;
  orderBy?: Array<ScrapReasonOrderByInput>;
  skip?: number;
  take?: number;
};
