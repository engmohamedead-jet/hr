import { ExpenseItem as TExpenseItem } from "../api/expenseItem/ExpenseItem";

export const EXPENSEITEM_TITLE_FIELD = "name";

export const ExpenseItemTitle = (record: TExpenseItem): string => {
  return record.name?.toString() || String(record.id);
};
