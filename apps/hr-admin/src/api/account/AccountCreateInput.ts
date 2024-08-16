import { ProductGroupCreateNestedManyWithoutAccountsInput } from "./ProductGroupCreateNestedManyWithoutAccountsInput";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { AccountCreateNestedManyWithoutAccountsInput } from "./AccountCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  SaleReturnAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  accountNumber: string;
  aleAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  costOfGoodsSoldAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  description?: string | null;
  inventoryAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  isMasterAccount?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  parentAccountId?: AccountWhereUniqueInput | null;
  parentAccounts?: AccountCreateNestedManyWithoutAccountsInput;
  purchaseAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  purchaseDiscountAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  purchaseReturnAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  saleDiscountAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
};
