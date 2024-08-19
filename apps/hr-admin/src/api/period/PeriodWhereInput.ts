import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentTermListRelationFilter } from "../paymentTerm/PaymentTermListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PeriodWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  installmentSaleFeePostingPeriodPaymentTerms?: PaymentTermListRelationFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  paymentTerms1?: PaymentTermListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
};
