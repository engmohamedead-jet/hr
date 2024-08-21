import { PurchaseDetail } from "../purchaseDetail/PurchaseDetail";
import { PurchaseReturnDetail } from "../purchaseReturnDetail/PurchaseReturnDetail";
import { PurchaseReturn } from "../purchaseReturn/PurchaseReturn";
import { Purchase } from "../purchase/Purchase";
import { Tenant } from "../tenant/Tenant";

export type PurchasePriceType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean | null;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  purchaseDetails?: PurchaseDetail | null;
  purchaseReturnDetails?: PurchaseReturnDetail | null;
  purchaseReturns?: PurchaseReturn | null;
  purchases?: Purchase | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
