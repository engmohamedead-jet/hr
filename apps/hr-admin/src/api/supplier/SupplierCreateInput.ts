import { Decimal } from "decimal.js";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PurchaseReturnCreateNestedManyWithoutSuppliersInput } from "./PurchaseReturnCreateNestedManyWithoutSuppliersInput";
import { PurchaseCreateNestedManyWithoutSuppliersInput } from "./PurchaseCreateNestedManyWithoutSuppliersInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SupplierCreateInput = {
  address?: string | null;
  code?: string | null;
  credit?: Decimal | null;
  currency?: CurrencyWhereUniqueInput | null;
  customerId?: CustomerWhereUniqueInput | null;
  debit?: Decimal | null;
  description?: string | null;
  email?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  phoneNumber?: string | null;
  purchaseReturns?: PurchaseReturnCreateNestedManyWithoutSuppliersInput;
  purchases?: PurchaseCreateNestedManyWithoutSuppliersInput;
  tenantId?: TenantWhereUniqueInput | null;
  website?: string | null;
};
