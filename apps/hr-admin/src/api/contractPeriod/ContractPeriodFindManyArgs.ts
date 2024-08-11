import { ContractPeriodWhereInput } from "./ContractPeriodWhereInput";
import { ContractPeriodOrderByInput } from "./ContractPeriodOrderByInput";

export type ContractPeriodFindManyArgs = {
  where?: ContractPeriodWhereInput;
  orderBy?: Array<ContractPeriodOrderByInput>;
  skip?: number;
  take?: number;
};
