import { ProductUpdateManyWithoutProductTypesInput } from "./ProductUpdateManyWithoutProductTypesInput";

export type ProductTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  isComponent?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  products?: ProductUpdateManyWithoutProductTypesInput;
};
