import { ProductionOrderWhereUniqueInput } from "../productionOrder/ProductionOrderWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type OrderStatusCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  productionOrders?: ProductionOrderWhereUniqueInput | null;
  tenantId?: TenantWhereUniqueInput | null;
};
