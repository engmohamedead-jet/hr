import { AccountCreateNestedManyWithoutAccountCategoriesInput } from "./AccountCreateNestedManyWithoutAccountCategoriesInput";

export type AccountCategoryCreateInput = {
  accounts?: AccountCreateNestedManyWithoutAccountCategoriesInput;
  code: string;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
};
