import { ProductUpdateManyWithoutProductCategoriesInput } from "./ProductUpdateManyWithoutProductCategoriesInput";

export type ProductCategoryUpdateInput = {
  code?: string | null;
  description?: string | null;
  isDefault?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  products?: ProductUpdateManyWithoutProductCategoriesInput;
};
