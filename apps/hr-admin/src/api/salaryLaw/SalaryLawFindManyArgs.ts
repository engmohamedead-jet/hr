import { SalaryLawWhereInput } from "./SalaryLawWhereInput";
import { SalaryLawOrderByInput } from "./SalaryLawOrderByInput";

export type SalaryLawFindManyArgs = {
  where?: SalaryLawWhereInput;
  orderBy?: Array<SalaryLawOrderByInput>;
  skip?: number;
  take?: number;
};
