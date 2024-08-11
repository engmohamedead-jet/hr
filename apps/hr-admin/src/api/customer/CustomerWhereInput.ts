import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { CustomerCateogryWhereUniqueInput } from "../customerCateogry/CustomerCateogryWhereUniqueInput";
import { CustomerTypeWhereUniqueInput } from "../customerType/CustomerTypeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RatingWhereUniqueInput } from "../rating/RatingWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MaintenanceContractListRelationFilter } from "../maintenanceContract/MaintenanceContractListRelationFilter";
import { SalePriceTypeWhereUniqueInput } from "../salePriceType/SalePriceTypeWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  code?: StringFilter;
  credit?: DecimalNullableFilter;
  currencyId?: CurrencyWhereUniqueInput;
  customerCateogryId?: CustomerCateogryWhereUniqueInput;
  customerTypeId?: CustomerTypeWhereUniqueInput;
  debit?: DecimalNullableFilter;
  description?: StringNullableFilter;
  email?: StringNullableFilter;
  firstBalance?: DecimalNullableFilter;
  firstBalanceDate?: DateTimeNullableFilter;
  guarantorAddress?: StringNullableFilter;
  guarantorJobTitle?: StringNullableFilter;
  guarantorName?: StringNullableFilter;
  guarantorNationalIdNumber?: StringNullableFilter;
  guarantorPhoneNumber?: StringNullableFilter;
  guarantorRatingId?: RatingWhereUniqueInput;
  guarantorWorkAddress?: StringNullableFilter;
  hasMortalOrDiscount?: StringNullableFilter;
  hasNoPendingInvoices?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isComplain?: BooleanNullableFilter;
  isSystem?: BooleanNullableFilter;
  isUnderRevision?: BooleanNullableFilter;
  jobTitle?: StringNullableFilter;
  maintenanceContracts?: MaintenanceContractListRelationFilter;
  maxAllowedDebit?: DecimalNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  previousBalance?: DecimalNullableFilter;
  rating?: RatingWhereUniqueInput;
  revisionDate?: DateTimeNullableFilter;
  saleDiscountRate?: DecimalNullableFilter;
  salePriceTypeId?: SalePriceTypeWhereUniqueInput;
  supplierId?: SupplierWhereUniqueInput;
  taxNumber?: StringNullableFilter;
  website?: StringNullableFilter;
  workAddress?: StringNullableFilter;
};
