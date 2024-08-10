import { BankBranch as TBankBranch } from "../api/bankBranch/BankBranch";

export const BANKBRANCH_TITLE_FIELD = "name";

export const BankBranchTitle = (record: TBankBranch): string => {
  return record.name?.toString() || String(record.id);
};
