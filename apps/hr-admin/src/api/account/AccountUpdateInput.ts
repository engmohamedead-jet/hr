import { ProductGroupUpdateManyWithoutAccountsInput } from "./ProductGroupUpdateManyWithoutAccountsInput";
import { InstallmentSaleFeeUpdateManyWithoutAccountsInput } from "./InstallmentSaleFeeUpdateManyWithoutAccountsInput";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { AccountUpdateManyWithoutAccountsInput } from "./AccountUpdateManyWithoutAccountsInput";
import { SalePersonUpdateManyWithoutAccountsInput } from "./SalePersonUpdateManyWithoutAccountsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type AccountUpdateInput = {
  SaleReturnAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  accountNumber?: string;
  aleAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  costOfGoodsSoldAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  description?: string | null;
  installmentSaleFees?: InstallmentSaleFeeUpdateManyWithoutAccountsInput;
  inventoryAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  isActive?: boolean | null;
  isMasterAccount?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  parentAccountId?: AccountWhereUniqueInput | null;
  parentAccounts?: AccountUpdateManyWithoutAccountsInput;
  purchaseAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  purchaseDiscountAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  purchaseReturnAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  saleDiscountAccountProductGroups?: ProductGroupUpdateManyWithoutAccountsInput;
  salePeople?: SalePersonUpdateManyWithoutAccountsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
