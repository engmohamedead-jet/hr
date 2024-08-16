import { ProductionDocument as TProductionDocument } from "../api/productionDocument/ProductionDocument";

export const PRODUCTIONDOCUMENT_TITLE_FIELD = "priority";

export const ProductionDocumentTitle = (
  record: TProductionDocument
): string => {
  return record.priority?.toString() || String(record.id);
};
