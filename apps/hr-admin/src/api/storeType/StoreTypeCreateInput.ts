import { StoreCreateNestedManyWithoutStoreTypesInput } from "./StoreCreateNestedManyWithoutStoreTypesInput";

export type StoreTypeCreateInput = {
  code: string;
  description?: string | null;
  isDefault?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  stores?: StoreCreateNestedManyWithoutStoreTypesInput;
};
