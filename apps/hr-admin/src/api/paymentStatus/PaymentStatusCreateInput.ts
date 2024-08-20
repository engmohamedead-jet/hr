import { SaleOrderWhereUniqueInput } from "../saleOrder/SaleOrderWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PaymentStatusCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  saleOrders?: SaleOrderWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
