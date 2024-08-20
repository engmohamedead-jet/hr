import { SalePaymentCreateNestedManyWithoutPaymentMethodsInput } from "./SalePaymentCreateNestedManyWithoutPaymentMethodsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PaymentMethodCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  salePayments?: SalePaymentCreateNestedManyWithoutPaymentMethodsInput;
  tenant?: TenantWhereUniqueInput | null;
};
