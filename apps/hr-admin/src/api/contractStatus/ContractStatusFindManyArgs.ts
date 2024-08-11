import { ContractStatusWhereInput } from "./ContractStatusWhereInput";
import { ContractStatusOrderByInput } from "./ContractStatusOrderByInput";

export type ContractStatusFindManyArgs = {
  where?: ContractStatusWhereInput;
  orderBy?: Array<ContractStatusOrderByInput>;
  skip?: number;
  take?: number;
};
