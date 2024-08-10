import { FiscalMonth } from "../fiscalMonth/FiscalMonth";

export type FiscalYear = {
  code: string | null;
  createdAt: Date;
  endsOn: Date | null;
  fiscalMonths?: Array<FiscalMonth>;
  id: string;
  isEodRequired: boolean | null;
  name: string | null;
  normalizedName: string | null;
  notes: string | null;
  startsFrom: Date | null;
  updatedAt: Date;
};
