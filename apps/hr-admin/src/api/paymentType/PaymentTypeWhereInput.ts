import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { PurchaseReturnListRelationFilter } from "../purchaseReturn/PurchaseReturnListRelationFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";
import { SaleOrderListRelationFilter } from "../saleOrder/SaleOrderListRelationFilter";
import { SaleReturnListRelationFilter } from "../saleReturn/SaleReturnListRelationFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PaymentTypeWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isActive?: BooleanFilter;
  isDefault?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  purchaseReturns?: PurchaseReturnListRelationFilter;
  purchases?: PurchaseListRelationFilter;
  saleOrders?: SaleOrderListRelationFilter;
  saleReturns?: SaleReturnListRelationFilter;
  sales?: SaleListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
};
