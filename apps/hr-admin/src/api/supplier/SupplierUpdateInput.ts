import { Decimal } from "decimal.js";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentVoucherUpdateManyWithoutSuppliersInput } from "./PaymentVoucherUpdateManyWithoutSuppliersInput";
import { PurchaseReturnUpdateManyWithoutSuppliersInput } from "./PurchaseReturnUpdateManyWithoutSuppliersInput";
import { PurchaseUpdateManyWithoutSuppliersInput } from "./PurchaseUpdateManyWithoutSuppliersInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SupplierUpdateInput = {
  address?: string | null;
  code?: string | null;
  credit?: Decimal | null;
  currency?: CurrencyWhereUniqueInput | null;
  customerId?: CustomerWhereUniqueInput | null;
  debit?: Decimal | null;
  description?: string | null;
  email?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  paymentVouchers?: PaymentVoucherUpdateManyWithoutSuppliersInput;
  phoneNumber?: string | null;
  purchaseReturns?: PurchaseReturnUpdateManyWithoutSuppliersInput;
  purchases?: PurchaseUpdateManyWithoutSuppliersInput;
  tenantId?: TenantWhereUniqueInput | null;
  website?: string | null;
};
