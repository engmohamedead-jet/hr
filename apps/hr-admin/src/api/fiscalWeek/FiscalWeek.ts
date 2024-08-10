import { FiscalMonth } from "../fiscalMonth/FiscalMonth";

export type FiscalWeek = {
  code: string | null;
  createdAt: Date;
  endsOn: string | null;
  fiscalMonthId?: FiscalMonth;
  id: string;
  name: string | null;
  normalizedName: string | null;
  note: string | null;
  startsFrom: string | null;
  updatedAt: Date;
};
