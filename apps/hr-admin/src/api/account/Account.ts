import { ProductGroup } from "../productGroup/ProductGroup";

export type Account = {
  SaleReturnAccountProductGroups?: Array<ProductGroup>;
  accountNumber: string;
  aleAccountProductGroups?: Array<ProductGroup>;
  costOfGoodsSoldAccountProductGroups?: Array<ProductGroup>;
  createdAt: Date;
  description: string | null;
  id: string;
  inventoryAccountProductGroups?: Array<ProductGroup>;
  isMasterAccount: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  parentAccountId?: Account | null;
  parentAccounts?: Array<Account>;
  purchaseAccountProductGroups?: Array<ProductGroup>;
  purchaseDiscountAccountProductGroups?: Array<ProductGroup>;
  purchaseReturnAccountProductGroups?: Array<ProductGroup>;
  saleDiscountAccountProductGroups?: Array<ProductGroup>;
  updatedAt: Date;
};
