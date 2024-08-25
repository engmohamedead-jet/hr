import { CheckInOutListRelationFilter } from "../checkInOut/CheckInOutListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type MachineWhereInput = {
  checkInOuts?: CheckInOutListRelationFilter;
  code?: StringNullableFilter;
  id?: StringFilter;
  ip?: StringNullableFilter;
  isAndroid?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
};
