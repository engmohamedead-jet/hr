import { ProductCreateNestedManyWithoutProductCategoriesInput } from "./ProductCreateNestedManyWithoutProductCategoriesInput";

export type ProductCategoryCreateInput = {
  code?: string | null;
  description?: string | null;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  products?: ProductCreateNestedManyWithoutProductCategoriesInput;
};
