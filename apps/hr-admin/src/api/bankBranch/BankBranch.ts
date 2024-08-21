import { Bank } from "../bank/Bank";
import { SalePayment } from "../salePayment/SalePayment";
import { Tenant } from "../tenant/Tenant";

export type BankBranch = {
  address: string | null;
  bank?: Bank;
  code: string | null;
  contactPhoneNumber: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  salePayments?: Array<SalePayment>;
  tenant?: Tenant | null;
  updatedAt: Date;
};
