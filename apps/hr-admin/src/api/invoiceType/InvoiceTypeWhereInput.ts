import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { PurchaseReturnListRelationFilter } from "../purchaseReturn/PurchaseReturnListRelationFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";
import { SaleReturnListRelationFilter } from "../saleReturn/SaleReturnListRelationFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type InvoiceTypeWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  purchaseReturns?: PurchaseReturnListRelationFilter;
  purchases?: PurchaseListRelationFilter;
  saleReturns?: SaleReturnListRelationFilter;
  sales?: SaleListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
};
