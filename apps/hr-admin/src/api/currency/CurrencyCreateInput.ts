import { CustomerCreateNestedManyWithoutCurrenciesInput } from "./CustomerCreateNestedManyWithoutCurrenciesInput";
import { SalePaymentCreateNestedManyWithoutCurrenciesInput } from "./SalePaymentCreateNestedManyWithoutCurrenciesInput";
import { SupplierCreateNestedManyWithoutCurrenciesInput } from "./SupplierCreateNestedManyWithoutCurrenciesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CurrencyCreateInput = {
  code?: string | null;
  customers?: CustomerCreateNestedManyWithoutCurrenciesInput;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  salePayments?: SalePaymentCreateNestedManyWithoutCurrenciesInput;
  suppliers?: SupplierCreateNestedManyWithoutCurrenciesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
