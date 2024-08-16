import { ProductVariant as TProductVariant } from "../api/productVariant/ProductVariant";

export const PRODUCTVARIANT_TITLE_FIELD = "id";

export const ProductVariantTitle = (record: TProductVariant): string => {
  return record.id?.toString() || String(record.id);
};
