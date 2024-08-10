import { BankTypeWhereInput } from "./BankTypeWhereInput";
import { BankTypeOrderByInput } from "./BankTypeOrderByInput";

export type BankTypeFindManyArgs = {
  where?: BankTypeWhereInput;
  orderBy?: Array<BankTypeOrderByInput>;
  skip?: number;
  take?: number;
};
