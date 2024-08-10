import { AccountUpdateManyWithoutAccountCategoriesInput } from "./AccountUpdateManyWithoutAccountCategoriesInput";

export type AccountCategoryUpdateInput = {
  accounts?: AccountUpdateManyWithoutAccountCategoriesInput;
  code?: string;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
