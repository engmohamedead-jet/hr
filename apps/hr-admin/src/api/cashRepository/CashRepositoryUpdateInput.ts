import { CashRepositoryUpdateManyWithoutCashRepositoriesInput } from "./CashRepositoryUpdateManyWithoutCashRepositoriesInput";
import { CashRepositoryWhereUniqueInput } from "./CashRepositoryWhereUniqueInput";
import { PurchaseReturnUpdateManyWithoutCashRepositoriesInput } from "./PurchaseReturnUpdateManyWithoutCashRepositoriesInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { SaleOrderUpdateManyWithoutCashRepositoriesInput } from "./SaleOrderUpdateManyWithoutCashRepositoriesInput";
import { SaleReturnUpdateManyWithoutCashRepositoriesInput } from "./SaleReturnUpdateManyWithoutCashRepositoriesInput";
import { SaleUpdateManyWithoutCashRepositoriesInput } from "./SaleUpdateManyWithoutCashRepositoriesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CashRepositoryUpdateInput = {
  cashRepositories?: CashRepositoryUpdateManyWithoutCashRepositoriesInput;
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  parentCashRepositoryId?: CashRepositoryWhereUniqueInput | null;
  purchaseReturns?: PurchaseReturnUpdateManyWithoutCashRepositoriesInput;
  purchases?: PurchaseWhereUniqueInput | null;
  saleOrders?: SaleOrderUpdateManyWithoutCashRepositoriesInput;
  saleReturns?: SaleReturnUpdateManyWithoutCashRepositoriesInput;
  sales?: SaleUpdateManyWithoutCashRepositoriesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
