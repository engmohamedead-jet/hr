import { ProductGroupCreateNestedManyWithoutAccountsInput } from "./ProductGroupCreateNestedManyWithoutAccountsInput";
import { InstallmentSaleFeeCreateNestedManyWithoutAccountsInput } from "./InstallmentSaleFeeCreateNestedManyWithoutAccountsInput";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { AccountCreateNestedManyWithoutAccountsInput } from "./AccountCreateNestedManyWithoutAccountsInput";
import { SalePersonCreateNestedManyWithoutAccountsInput } from "./SalePersonCreateNestedManyWithoutAccountsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type AccountCreateInput = {
  SaleReturnAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  accountNumber: string;
  aleAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  costOfGoodsSoldAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  description?: string | null;
  installmentSaleFees?: InstallmentSaleFeeCreateNestedManyWithoutAccountsInput;
  inventoryAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  isActive?: boolean | null;
  isMasterAccount: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  parentAccountId?: AccountWhereUniqueInput | null;
  parentAccounts?: AccountCreateNestedManyWithoutAccountsInput;
  purchaseAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  purchaseDiscountAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  purchaseReturnAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  saleDiscountAccountProductGroups?: ProductGroupCreateNestedManyWithoutAccountsInput;
  salePeople?: SalePersonCreateNestedManyWithoutAccountsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
