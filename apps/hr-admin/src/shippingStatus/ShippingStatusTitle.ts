import { ShippingStatus as TShippingStatus } from "../api/shippingStatus/ShippingStatus";

export const SHIPPINGSTATUS_TITLE_FIELD = "name";

export const ShippingStatusTitle = (record: TShippingStatus): string => {
  return record.name?.toString() || String(record.id);
};
