import { Decimal } from "decimal.js";

export type Calendar = {
  averageHoursPerDay: Decimal | null;
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean | null;
  isTwoWeeksCalendar: boolean | null;
  name: string | null;
  normalizedName: string | null;
  note: string | null;
  updatedAt: Date;
};
