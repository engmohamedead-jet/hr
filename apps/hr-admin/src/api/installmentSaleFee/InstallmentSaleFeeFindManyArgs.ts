import { InstallmentSaleFeeWhereInput } from "./InstallmentSaleFeeWhereInput";
import { InstallmentSaleFeeOrderByInput } from "./InstallmentSaleFeeOrderByInput";

export type InstallmentSaleFeeFindManyArgs = {
  where?: InstallmentSaleFeeWhereInput;
  orderBy?: Array<InstallmentSaleFeeOrderByInput>;
  skip?: number;
  take?: number;
};
