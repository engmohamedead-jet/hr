import { FiscalMonthWhereUniqueInput } from "../fiscalMonth/FiscalMonthWhereUniqueInput";

export type FiscalWeekUpdateInput = {
  code?: string | null;
  endsOn?: string | null;
  fiscalMonthId?: FiscalMonthWhereUniqueInput;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
  startsFrom?: string | null;
};
