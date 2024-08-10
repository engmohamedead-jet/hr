import { CashRepositoryWhereUniqueInput } from "./CashRepositoryWhereUniqueInput";

export type CashRepositoryCreateInput = {
  cashRepositories?: CashRepositoryWhereUniqueInput | null;
  code: string;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  parentCashRepositoryId?: CashRepositoryWhereUniqueInput | null;
};
