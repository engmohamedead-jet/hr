import { CustomerUpdateManyWithoutCurrenciesInput } from "./CustomerUpdateManyWithoutCurrenciesInput";
import { SupplierUpdateManyWithoutCurrenciesInput } from "./SupplierUpdateManyWithoutCurrenciesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CurrencyUpdateInput = {
  code?: string | null;
  customers?: CustomerUpdateManyWithoutCurrenciesInput;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  suppliers?: SupplierUpdateManyWithoutCurrenciesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
