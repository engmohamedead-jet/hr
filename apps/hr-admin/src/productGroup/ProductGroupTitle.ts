import { ProductGroup as TProductGroup } from "../api/productGroup/ProductGroup";

export const PRODUCTGROUP_TITLE_FIELD = "name";

export const ProductGroupTitle = (record: TProductGroup): string => {
  return record.name?.toString() || String(record.id);
};
