import { BankBranchUpdateManyWithoutBanksInput } from "./BankBranchUpdateManyWithoutBanksInput";
import { BankTypeWhereUniqueInput } from "../bankType/BankTypeWhereUniqueInput";
import { SalePaymentUpdateManyWithoutBanksInput } from "./SalePaymentUpdateManyWithoutBanksInput";

export type BankUpdateInput = {
  address?: string | null;
  bankBranches?: BankBranchUpdateManyWithoutBanksInput;
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
  salePayments?: SalePaymentUpdateManyWithoutBanksInput;
  street?: string | null;
};
