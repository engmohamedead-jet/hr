import { BankCreateNestedManyWithoutBankTypesInput } from "./BankCreateNestedManyWithoutBankTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BankTypeCreateInput = {
  banks?: BankCreateNestedManyWithoutBankTypesInput;
  code?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
