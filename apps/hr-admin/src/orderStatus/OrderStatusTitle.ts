import { OrderStatus as TOrderStatus } from "../api/orderStatus/OrderStatus";

export const ORDERSTATUS_TITLE_FIELD = "name";

export const OrderStatusTitle = (record: TOrderStatus): string => {
  return record.name?.toString() || String(record.id);
};
