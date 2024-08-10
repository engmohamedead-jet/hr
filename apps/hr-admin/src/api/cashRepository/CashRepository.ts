export type CashRepository = {
  cashRepositories?: CashRepository | null;
  code: string;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  parentCashRepositoryId?: CashRepository | null;
  updatedAt: Date;
};
