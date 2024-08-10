import { AccountCategory as TAccountCategory } from "../api/accountCategory/AccountCategory";

export const ACCOUNTCATEGORY_TITLE_FIELD = "name";

export const AccountCategoryTitle = (record: TAccountCategory): string => {
  return record.name?.toString() || String(record.id);
};
