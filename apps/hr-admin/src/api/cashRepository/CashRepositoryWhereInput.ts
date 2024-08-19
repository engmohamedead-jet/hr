import { CashRepositoryListRelationFilter } from "./CashRepositoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { CashRepositoryWhereUniqueInput } from "./CashRepositoryWhereUniqueInput";
import { PurchaseReturnListRelationFilter } from "../purchaseReturn/PurchaseReturnListRelationFilter";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { SaleReturnListRelationFilter } from "../saleReturn/SaleReturnListRelationFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CashRepositoryWhereInput = {
  cashRepositories?: CashRepositoryListRelationFilter;
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  parentCashRepositoryId?: CashRepositoryWhereUniqueInput;
  purchaseReturns?: PurchaseReturnListRelationFilter;
  purchases?: PurchaseWhereUniqueInput;
  saleReturns?: SaleReturnListRelationFilter;
  sales?: SaleListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
};
