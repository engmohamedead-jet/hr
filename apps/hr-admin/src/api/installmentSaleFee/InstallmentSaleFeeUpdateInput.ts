import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { PaymentTermUpdateManyWithoutInstallmentSaleFeesInput } from "./PaymentTermUpdateManyWithoutInstallmentSaleFeesInput";
import { Decimal } from "decimal.js";

export type InstallmentSaleFeeUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  code?: string | null;
  description?: string | null;
  isFlatAmount?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  paymentTerms?: PaymentTermUpdateManyWithoutInstallmentSaleFeesInput;
  rate?: Decimal | null;
};