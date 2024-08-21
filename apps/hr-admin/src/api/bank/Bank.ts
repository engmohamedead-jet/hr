import { BankBranch } from "../bankBranch/BankBranch";
import { BankType } from "../bankType/BankType";
import { SalePayment } from "../salePayment/SalePayment";

export type Bank = {
  address: string | null;
  bankBranches?: Array<BankBranch>;
  bankType?: BankType | null;
  cellPhoneNumber: string | null;
  code: string | null;
  contactPhoneNumber: string | null;
  createdAt: Date;
  description: string | null;
  fax: string | null;
  homePhoneNumber: string | null;
  id: string;
  name: string | null;
  normalizedName: string | null;
  relationshipOfficerContactNumber: string | null;
  relationshipOfficerName: string | null;
  salePayments?: Array<SalePayment>;
  street: string | null;
  updatedAt: Date;
};
