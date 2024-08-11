import { Decimal } from "decimal.js";
import { Currency } from "../currency/Currency";
import { CustomerCateogry } from "../customerCateogry/CustomerCateogry";
import { CustomerType } from "../customerType/CustomerType";
import { Rating } from "../rating/Rating";
import { MaintenanceContract } from "../maintenanceContract/MaintenanceContract";
import { SalePriceType } from "../salePriceType/SalePriceType";
import { Supplier } from "../supplier/Supplier";

export type Customer = {
  address: string | null;
  code: string;
  createdAt: Date;
  credit: Decimal | null;
  currencyId?: Currency | null;
  customerCateogryId?: CustomerCateogry | null;
  customerTypeId?: CustomerType | null;
  debit: Decimal | null;
  description: string | null;
  email: string | null;
  firstBalance: Decimal | null;
  firstBalanceDate: Date | null;
  guarantorAddress: string | null;
  guarantorJobTitle: string | null;
  guarantorName: string | null;
  guarantorNationalIdNumber: string | null;
  guarantorPhoneNumber: string | null;
  guarantorRatingId?: Rating | null;
  guarantorWorkAddress: string | null;
  hasMortalOrDiscount: string | null;
  hasNoPendingInvoices: string | null;
  id: string;
  isActive: boolean | null;
  isComplain: boolean | null;
  isSystem: boolean | null;
  isUnderRevision: boolean | null;
  jobTitle: string | null;
  maintenanceContracts?: Array<MaintenanceContract>;
  maxAllowedDebit: Decimal | null;
  name: string;
  normalizedName: string;
  note: string | null;
  phoneNumber: string | null;
  previousBalance: Decimal | null;
  rating?: Rating | null;
  revisionDate: Date | null;
  saleDiscountRate: Decimal | null;
  salePriceTypeId?: SalePriceType | null;
  supplierId?: Supplier | null;
  taxNumber: string | null;
  updatedAt: Date;
  website: string | null;
  workAddress: string | null;
};
