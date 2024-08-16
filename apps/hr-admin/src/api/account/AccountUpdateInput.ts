import { ProductGroupUpdateManyWithoutAccountsInput } from "./ProductGroupUpdateManyWithoutAccountsInput";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { AccountUpdateManyWithoutAccountsInput } from "./AccountUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  SaleReturnAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  accountNumber?: string;
  aleAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  costOfGoodsSoldAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  description?: string | null;
  inventoryAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  isMasterAccount?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  parentAccountId?: AccountWhereUniqueInput | null;
  parentAccounts?: AccountUpdateManyWithoutAccountsInput;
  purchaseAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  purchaseDiscountAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  purchaseReturnAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  saleDiscountAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
};
