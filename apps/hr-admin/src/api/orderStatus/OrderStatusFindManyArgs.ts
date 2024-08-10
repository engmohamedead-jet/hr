import { OrderStatusWhereInput } from "./OrderStatusWhereInput";
import { OrderStatusOrderByInput } from "./OrderStatusOrderByInput";

export type OrderStatusFindManyArgs = {
  where?: OrderStatusWhereInput;
  orderBy?: Array<OrderStatusOrderByInput>;
  skip?: number;
  take?: number;
};
