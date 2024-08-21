import { ProductionOrder } from "../productionOrder/ProductionOrder";
import { SaleOrder } from "../saleOrder/SaleOrder";
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
  saleOrders?: SaleOrder | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
