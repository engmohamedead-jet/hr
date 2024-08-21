import { ProductionOrder as TProductionOrder } from "../api/productionOrder/ProductionOrder";

export const PRODUCTIONORDER_TITLE_FIELD = "name";

export const ProductionOrderTitle = (record: TProductionOrder): string => {
  return record.name?.toString() || String(record.id);
};
