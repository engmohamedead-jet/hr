import { PaymentVoucherUpdateManyWithoutExpenseItemsInput } from "./PaymentVoucherUpdateManyWithoutExpenseItemsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ExpenseItemUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  paymentVouchers?: PaymentVoucherUpdateManyWithoutExpenseItemsInput;
  tenant?: TenantWhereUniqueInput | null;
};
