import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type TradingSummaryWhereInput = {
  fiscalWeekId?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  note?: StringNullableFilter;
  partyId?: StringNullableFilter;
  price?: DecimalFilter;
  priceTotal?: DecimalFilter;
  productId?: StringFilter;
  productVariantId?: StringNullableFilter;
  quantity?: DecimalFilter;
  tenantId?: TenantWhereUniqueInput;
  transactionDate?: DateTimeFilter;
  transactionTypeId?: StringNullableFilter;
  unitId?: StringFilter;
};
