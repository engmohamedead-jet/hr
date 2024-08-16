import { ProductionOrder } from "../productionOrder/ProductionOrder";

export type OrderStatus = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  name: string;
  normalizedName: string;
  note: string | null;
  productionOrders?: ProductionOrder | null;
  updatedAt: Date;
};
