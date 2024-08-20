import { BankWhereUniqueInput } from "../bank/BankWhereUniqueInput";
import { SalePaymentCreateNestedManyWithoutBankBranchesInput } from "./SalePaymentCreateNestedManyWithoutBankBranchesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BankBranchCreateInput = {
  address?: string | null;
  bank: BankWhereUniqueInput;
  code?: string | null;
  contactPhoneNumber?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  salePayments?: SalePaymentCreateNestedManyWithoutBankBranchesInput;
  tenant?: TenantWhereUniqueInput | null;
};
