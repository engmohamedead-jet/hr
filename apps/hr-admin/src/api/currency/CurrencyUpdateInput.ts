import { CustomerUpdateManyWithoutCurrenciesInput } from "./CustomerUpdateManyWithoutCurrenciesInput";
import { SalePaymentUpdateManyWithoutCurrenciesInput } from "./SalePaymentUpdateManyWithoutCurrenciesInput";
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
  salePayments?: SalePaymentUpdateManyWithoutCurrenciesInput;
  suppliers?: SupplierUpdateManyWithoutCurrenciesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
