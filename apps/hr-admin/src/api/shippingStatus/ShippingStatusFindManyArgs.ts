import { ShippingStatusWhereInput } from "./ShippingStatusWhereInput";
import { ShippingStatusOrderByInput } from "./ShippingStatusOrderByInput";

export type ShippingStatusFindManyArgs = {
  where?: ShippingStatusWhereInput;
  orderBy?: Array<ShippingStatusOrderByInput>;
  skip?: number;
  take?: number;
};
