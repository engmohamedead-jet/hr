import { ProductDepartment as TProductDepartment } from "../api/productDepartment/ProductDepartment";

export const PRODUCTDEPARTMENT_TITLE_FIELD = "name";

export const ProductDepartmentTitle = (record: TProductDepartment): string => {
  return record.name?.toString() || String(record.id);
};
