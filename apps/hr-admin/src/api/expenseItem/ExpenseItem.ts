export type ExpenseItem = {
  code: string;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
