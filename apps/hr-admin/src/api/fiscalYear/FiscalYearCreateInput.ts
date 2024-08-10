import { FiscalMonthCreateNestedManyWithoutFiscalYearsInput } from "./FiscalMonthCreateNestedManyWithoutFiscalYearsInput";

export type FiscalYearCreateInput = {
  code?: string | null;
  endsOn?: Date | null;
  fiscalMonths?: FiscalMonthCreateNestedManyWithoutFiscalYearsInput;
  isEodRequired?: boolean | null;
  name?: string | null;
  normalizedName?: string | null;
  notes?: string | null;
  startsFrom?: Date | null;
};
