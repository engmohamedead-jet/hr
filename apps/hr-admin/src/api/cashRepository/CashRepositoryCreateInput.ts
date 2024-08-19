import { CashRepositoryCreateNestedManyWithoutCashRepositoriesInput } from "./CashRepositoryCreateNestedManyWithoutCashRepositoriesInput";
import { CashRepositoryWhereUniqueInput } from "./CashRepositoryWhereUniqueInput";
import { PurchaseReturnCreateNestedManyWithoutCashRepositoriesInput } from "./PurchaseReturnCreateNestedManyWithoutCashRepositoriesInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { SaleReturnCreateNestedManyWithoutCashRepositoriesInput } from "./SaleReturnCreateNestedManyWithoutCashRepositoriesInput";
import { SaleCreateNestedManyWithoutCashRepositoriesInput } from "./SaleCreateNestedManyWithoutCashRepositoriesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CashRepositoryCreateInput = {
  cashRepositories?: CashRepositoryCreateNestedManyWithoutCashRepositoriesInput;
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  parentCashRepositoryId?: CashRepositoryWhereUniqueInput | null;
  purchaseReturns?: PurchaseReturnCreateNestedManyWithoutCashRepositoriesInput;
  purchases?: PurchaseWhereUniqueInput | null;
  saleReturns?: SaleReturnCreateNestedManyWithoutCashRepositoriesInput;
  sales?: SaleCreateNestedManyWithoutCashRepositoriesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
