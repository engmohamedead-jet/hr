import { ProductionOrder } from "../productionOrder/ProductionOrder";
import { Tenant } from "../tenant/Tenant";

export type OrderStatus = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  productionOrders?: ProductionOrder | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
