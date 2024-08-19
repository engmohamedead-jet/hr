import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { PaymentTermUpdateManyWithoutInstallmentSaleFeesInput } from "./PaymentTermUpdateManyWithoutInstallmentSaleFeesInput";
import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type InstallmentSaleFeeUpdateInput = {
  accountId?: AccountWhereUniqueInput | null;
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  isFlatAmount?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  paymentTerms?: PaymentTermUpdateManyWithoutInstallmentSaleFeesInput;
  rate?: Decimal | null;
  tenantId?: TenantWhereUniqueInput | null;
};
