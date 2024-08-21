import { ProductionOrderWhereUniqueInput } from "../productionOrder/ProductionOrderWhereUniqueInput";
import { SaleOrderWhereUniqueInput } from "../saleOrder/SaleOrderWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type OrderStatusCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  productionOrders?: ProductionOrderWhereUniqueInput | null;
  saleOrders?: SaleOrderWhereUniqueInput | null;
  tenantId?: TenantWhereUniqueInput | null;
};
