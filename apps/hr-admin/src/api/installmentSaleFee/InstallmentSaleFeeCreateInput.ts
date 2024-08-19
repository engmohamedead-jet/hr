import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { PaymentTermCreateNestedManyWithoutInstallmentSaleFeesInput } from "./PaymentTermCreateNestedManyWithoutInstallmentSaleFeesInput";
import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type InstallmentSaleFeeCreateInput = {
  accountId?: AccountWhereUniqueInput | null;
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  isFlatAmount?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  paymentTerms?: PaymentTermCreateNestedManyWithoutInstallmentSaleFeesInput;
  rate?: Decimal | null;
  tenantId?: TenantWhereUniqueInput | null;
};
