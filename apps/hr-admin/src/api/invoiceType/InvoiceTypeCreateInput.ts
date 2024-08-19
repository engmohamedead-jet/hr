import { PurchaseReturnCreateNestedManyWithoutInvoiceTypesInput } from "./PurchaseReturnCreateNestedManyWithoutInvoiceTypesInput";
import { PurchaseCreateNestedManyWithoutInvoiceTypesInput } from "./PurchaseCreateNestedManyWithoutInvoiceTypesInput";
import { SaleReturnCreateNestedManyWithoutInvoiceTypesInput } from "./SaleReturnCreateNestedManyWithoutInvoiceTypesInput";
import { SaleCreateNestedManyWithoutInvoiceTypesInput } from "./SaleCreateNestedManyWithoutInvoiceTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type InvoiceTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  purchaseReturns?: PurchaseReturnCreateNestedManyWithoutInvoiceTypesInput;
  purchases?: PurchaseCreateNestedManyWithoutInvoiceTypesInput;
  saleReturns?: SaleReturnCreateNestedManyWithoutInvoiceTypesInput;
  sales?: SaleCreateNestedManyWithoutInvoiceTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
