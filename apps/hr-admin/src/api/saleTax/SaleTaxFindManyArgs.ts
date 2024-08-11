import { SaleTaxWhereInput } from "./SaleTaxWhereInput";
import { SaleTaxOrderByInput } from "./SaleTaxOrderByInput";

export type SaleTaxFindManyArgs = {
  where?: SaleTaxWhereInput;
  orderBy?: Array<SaleTaxOrderByInput>;
  skip?: number;
  take?: number;
};
