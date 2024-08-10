import { FiscalMonthUpdateManyWithoutFiscalYearsInput } from "./FiscalMonthUpdateManyWithoutFiscalYearsInput";

export type FiscalYearUpdateInput = {
  code?: string | null;
  endsOn?: Date | null;
  fiscalMonths?: FiscalMonthUpdateManyWithoutFiscalYearsInput;
  isEodRequired?: boolean | null;
  name?: string | null;
  normalizedName?: string | null;
  notes?: string | null;
  startsFrom?: Date | null;
};
