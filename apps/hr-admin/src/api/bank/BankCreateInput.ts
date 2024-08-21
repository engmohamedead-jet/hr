import { BankBranchCreateNestedManyWithoutBanksInput } from "./BankBranchCreateNestedManyWithoutBanksInput";
import { BankTypeWhereUniqueInput } from "../bankType/BankTypeWhereUniqueInput";
import { SalePaymentCreateNestedManyWithoutBanksInput } from "./SalePaymentCreateNestedManyWithoutBanksInput";

export type BankCreateInput = {
  address?: string | null;
  bankBranches?: BankBranchCreateNestedManyWithoutBanksInput;
  bankType?: BankTypeWhereUniqueInput | null;
  cellPhoneNumber?: string | null;
  code?: string | null;
  contactPhoneNumber?: string | null;
  description?: string | null;
  fax?: string | null;
  homePhoneNumber?: string | null;
  name?: string | null;
  normalizedName?: string | null;
  relationshipOfficerContactNumber?: string | null;
  relationshipOfficerName?: string | null;
  salePayments?: SalePaymentCreateNestedManyWithoutBanksInput;
  street?: string | null;
};
