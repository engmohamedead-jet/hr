import { SalePaymentUpdateManyWithoutPaymentMethodsInput } from "./SalePaymentUpdateManyWithoutPaymentMethodsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PaymentMethodUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  salePayments?: SalePaymentUpdateManyWithoutPaymentMethodsInput;
  tenant?: TenantWhereUniqueInput | null;
};
