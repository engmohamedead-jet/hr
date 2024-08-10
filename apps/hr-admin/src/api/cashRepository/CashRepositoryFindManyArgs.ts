import { CashRepositoryWhereInput } from "./CashRepositoryWhereInput";
import { CashRepositoryOrderByInput } from "./CashRepositoryOrderByInput";

export type CashRepositoryFindManyArgs = {
  where?: CashRepositoryWhereInput;
  orderBy?: Array<CashRepositoryOrderByInput>;
  skip?: number;
  take?: number;
};
