import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PaymentTermListRelationFilter } from "../paymentTerm/PaymentTermListRelationFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type InstallmentSaleFeeWhereInput = {
  accountId?: AccountWhereUniqueInput;
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isFlatAmount?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  paymentTerms?: PaymentTermListRelationFilter;
  rate?: DecimalNullableFilter;
  tenantId?: TenantWhereUniqueInput;
};
