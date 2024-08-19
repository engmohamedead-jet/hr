import { PurchaseDetailWhereUniqueInput } from "../purchaseDetail/PurchaseDetailWhereUniqueInput";
import { PurchaseReturnDetailWhereUniqueInput } from "../purchaseReturnDetail/PurchaseReturnDetailWhereUniqueInput";
import { PurchaseReturnWhereUniqueInput } from "../purchaseReturn/PurchaseReturnWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PurchasePriceTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  isDefault?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  purchaseDetails?: PurchaseDetailWhereUniqueInput | null;
  purchaseReturnDetails?: PurchaseReturnDetailWhereUniqueInput | null;
  purchaseReturns?: PurchaseReturnWhereUniqueInput | null;
  purchases?: PurchaseWhereUniqueInput | null;
  tenantId?: TenantWhereUniqueInput | null;
};
