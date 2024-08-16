import { ProductionAvailability as TProductionAvailability } from "../api/productionAvailability/ProductionAvailability";

export const PRODUCTIONAVAILABILITY_TITLE_FIELD = "name";

export const ProductionAvailabilityTitle = (
  record: TProductionAvailability
): string => {
  return record.name?.toString() || String(record.id);
};
