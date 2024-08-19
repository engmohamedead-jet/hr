import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InstallmentSaleFeeWhereUniqueInput } from "../installmentSaleFee/InstallmentSaleFeeWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PaymentTermWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  dueDays?: IntFilter;
  duePeriodId?: PeriodWhereUniqueInput;
  gracePeriod?: IntFilter;
  id?: StringFilter;
  installmentSaleFeeId?: InstallmentSaleFeeWhereUniqueInput;
  installmentSaleFeePostingPeriod?: PeriodWhereUniqueInput;
  isActive?: BooleanFilter;
  isDefault?: BooleanNullableFilter;
  isDueOnDate?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
};
