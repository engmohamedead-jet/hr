import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { PaymentTermCreateNestedManyWithoutInstallmentSaleFeesInput } from "./PaymentTermCreateNestedManyWithoutInstallmentSaleFeesInput";
import { Decimal } from "decimal.js";

export type InstallmentSaleFeeCreateInput = {
  account?: AccountWhereUniqueInput | null;
  code?: string | null;
  description?: string | null;
  isFlatAmount?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  paymentTerms?: PaymentTermCreateNestedManyWithoutInstallmentSaleFeesInput;
  rate?: Decimal | null;
};
