import { ProductUpdateManyWithoutProductTypesInput } from "./ProductUpdateManyWithoutProductTypesInput";

export type ProductTypeUpdateInput = {
  code?: string | null;
  isComponent?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  products?: ProductUpdateManyWithoutProductTypesInput;
};
