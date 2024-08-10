import { StoreUpdateManyWithoutStoreTypesInput } from "./StoreUpdateManyWithoutStoreTypesInput";

export type StoreTypeUpdateInput = {
  code?: string;
  description?: string | null;
  isDefault?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  stores?: StoreUpdateManyWithoutStoreTypesInput;
};
