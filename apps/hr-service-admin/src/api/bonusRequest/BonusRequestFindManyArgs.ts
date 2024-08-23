import { BonusRequestWhereInput } from "./BonusRequestWhereInput";
import { BonusRequestOrderByInput } from "./BonusRequestOrderByInput";

export type BonusRequestFindManyArgs = {
  where?: BonusRequestWhereInput;
  orderBy?: Array<BonusRequestOrderByInput>;
  skip?: number;
  take?: number;
};
