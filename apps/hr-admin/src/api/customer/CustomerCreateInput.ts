import { Decimal } from "decimal.js";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { CustomerCateogryWhereUniqueInput } from "../customerCateogry/CustomerCateogryWhereUniqueInput";
import { CustomerTypeWhereUniqueInput } from "../customerType/CustomerTypeWhereUniqueInput";
import { RatingWhereUniqueInput } from "../rating/RatingWhereUniqueInput";
import { SalePriceTypeWhereUniqueInput } from "../salePriceType/SalePriceTypeWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type CustomerCreateInput = {
  address?: string | null;
  code: string;
  credit?: Decimal | null;
  currencyId?: CurrencyWhereUniqueInput | null;
  customerCateogryId?: CustomerCateogryWhereUniqueInput | null;
  customerTypeId?: CustomerTypeWhereUniqueInput | null;
  debit?: Decimal | null;
  description?: string | null;
  email?: string | null;
  firstBalance?: Decimal | null;
  firstBalanceDate?: Date | null;
  guarantorAddress?: string | null;
  guarantorJobTitle?: string | null;
  guarantorName?: string | null;
  guarantorNationalIdNumber?: string | null;
  guarantorPhoneNumber?: string | null;
  guarantorRatingId?: RatingWhereUniqueInput | null;
  guarantorWorkAddress?: string | null;
  hasMortalOrDiscount?: string | null;
  hasNoPendingInvoices?: string | null;
  isActive?: boolean | null;
  isComplain?: boolean | null;
  isSystem?: boolean | null;
  isUnderRevision?: boolean | null;
  jobTitle?: string | null;
  maxAllowedDebit?: Decimal | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  phoneNumber?: string | null;
  previousBalance?: Decimal | null;
  rating?: RatingWhereUniqueInput | null;
  revisionDate?: Date | null;
  saleDiscountRate?: Decimal | null;
  salePriceTypeId?: SalePriceTypeWhereUniqueInput | null;
  supplierId?: SupplierWhereUniqueInput | null;
  taxNumber?: string | null;
  website?: string | null;
  workAddress?: string | null;
};
