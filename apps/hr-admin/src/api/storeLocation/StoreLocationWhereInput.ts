import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type StoreLocationWhereInput = {
  code?: StringNullableFilter;
  createdAtSide?: "Server" | "Client";
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  storeId?: StoreWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
};
