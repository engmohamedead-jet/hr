import { BankBranchWhereInput } from "./BankBranchWhereInput";
import { BankBranchOrderByInput } from "./BankBranchOrderByInput";

export type BankBranchFindManyArgs = {
  where?: BankBranchWhereInput;
  orderBy?: Array<BankBranchOrderByInput>;
  skip?: number;
  take?: number;
};
