import { Decimal } from "decimal.js";

export type CalendarCreateInput = {
  averageHoursPerDay?: Decimal | null;
  code?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  isTwoWeeksCalendar?: boolean | null;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
};
