import { PaymentVoucherCreateNestedManyWithoutExpenseItemsInput } from "./PaymentVoucherCreateNestedManyWithoutExpenseItemsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ExpenseItemCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  paymentVouchers?: PaymentVoucherCreateNestedManyWithoutExpenseItemsInput;
  tenant?: TenantWhereUniqueInput | null;
};
