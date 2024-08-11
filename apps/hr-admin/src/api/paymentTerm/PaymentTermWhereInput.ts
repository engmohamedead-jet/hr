import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InstallmentSaleFeeWhereUniqueInput } from "../installmentSaleFee/InstallmentSaleFeeWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PaymentTermWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  dueDays?: IntNullableFilter;
  dueOnDate?: DateTimeNullableFilter;
  duePeriodId?: PeriodWhereUniqueInput;
  gracePeriod?: IntNullableFilter;
  id?: StringFilter;
  installmentSaleFeeId?: InstallmentSaleFeeWhereUniqueInput;
  installmentSaleFeePostingPeriodId?: PeriodWhereUniqueInput;
  isDefault?: BooleanNullableFilter;
  name?: StringNullableFilter;
  normalizedName?: StringNullableFilter;
};
