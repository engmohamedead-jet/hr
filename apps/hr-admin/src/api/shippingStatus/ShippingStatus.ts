import { SaleOrder } from "../saleOrder/SaleOrder";
import { Tenant } from "../tenant/Tenant";

export type ShippingStatus = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  saleOrders?: SaleOrder | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
