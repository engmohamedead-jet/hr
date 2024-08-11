import { ProductCategory as TProductCategory } from "../api/productCategory/ProductCategory";

export const PRODUCTCATEGORY_TITLE_FIELD = "name";

export const ProductCategoryTitle = (record: TProductCategory): string => {
  return record.name?.toString() || String(record.id);
};
