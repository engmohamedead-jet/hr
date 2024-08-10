import { AccountCreateNestedManyWithoutAccountTypesInput } from "./AccountCreateNestedManyWithoutAccountTypesInput";

export type AccountTypeCreateInput = {
  accounts?: AccountCreateNestedManyWithoutAccountTypesInput;
  code: string;
  description?: string | null;
  isSystem?: boolean | null;
  name: string;
  normalizedName?: string | null;
  note?: string | null;
};
