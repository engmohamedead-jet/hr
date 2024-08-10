import { AccountCategoryWhereInput } from "./AccountCategoryWhereInput";
import { AccountCategoryOrderByInput } from "./AccountCategoryOrderByInput";

export type AccountCategoryFindManyArgs = {
  where?: AccountCategoryWhereInput;
  orderBy?: Array<AccountCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
