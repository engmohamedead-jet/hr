import { ProductionOrderWhereUniqueInput } from "../productionOrder/ProductionOrderWhereUniqueInput";

export type OrderStatusUpdateInput = {
  code?: string | null;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  productionOrders?: ProductionOrderWhereUniqueInput | null;
};
