import { ProductCreateNestedManyWithoutProductTypesInput } from "./ProductCreateNestedManyWithoutProductTypesInput";

export type ProductTypeCreateInput = {
  code?: string | null;
  isComponent?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  products?: ProductCreateNestedManyWithoutProductTypesInput;
};
