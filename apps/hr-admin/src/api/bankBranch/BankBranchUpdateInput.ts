import { BankWhereUniqueInput } from "../bank/BankWhereUniqueInput";
import { SalePaymentUpdateManyWithoutBankBranchesInput } from "./SalePaymentUpdateManyWithoutBankBranchesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BankBranchUpdateInput = {
  address?: string | null;
  bank?: BankWhereUniqueInput;
  code?: string | null;
  contactPhoneNumber?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  salePayments?: SalePaymentUpdateManyWithoutBankBranchesInput;
  tenant?: TenantWhereUniqueInput | null;
};
