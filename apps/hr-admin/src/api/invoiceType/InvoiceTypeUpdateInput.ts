import { PurchaseReturnUpdateManyWithoutInvoiceTypesInput } from "./PurchaseReturnUpdateManyWithoutInvoiceTypesInput";
import { PurchaseUpdateManyWithoutInvoiceTypesInput } from "./PurchaseUpdateManyWithoutInvoiceTypesInput";
import { SaleReturnUpdateManyWithoutInvoiceTypesInput } from "./SaleReturnUpdateManyWithoutInvoiceTypesInput";
import { SaleUpdateManyWithoutInvoiceTypesInput } from "./SaleUpdateManyWithoutInvoiceTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type InvoiceTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  purchaseReturns?: PurchaseReturnUpdateManyWithoutInvoiceTypesInput;
  purchases?: PurchaseUpdateManyWithoutInvoiceTypesInput;
  saleReturns?: SaleReturnUpdateManyWithoutInvoiceTypesInput;
  sales?: SaleUpdateManyWithoutInvoiceTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
