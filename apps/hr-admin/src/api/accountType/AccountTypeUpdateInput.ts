import { AccountUpdateManyWithoutAccountTypesInput } from "./AccountUpdateManyWithoutAccountTypesInput";

export type AccountTypeUpdateInput = {
  accounts?: AccountUpdateManyWithoutAccountTypesInput;
  code?: string;
  description?: string | null;
  isSystem?: boolean | null;
  name?: string;
  normalizedName?: string | null;
  note?: string | null;
};
