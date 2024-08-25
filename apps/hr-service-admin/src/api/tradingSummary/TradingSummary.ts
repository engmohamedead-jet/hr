import { Decimal } from "decimal.js";
import { Tenant } from "../tenant/Tenant";

export type TradingSummary = {
  createdAt: Date;
  fiscalWeekId: string | null;
  id: string;
  isActive: boolean;
  note: string | null;
  partyId: string | null;
  price: Decimal;
  priceTotal: Decimal;
  productId: string;
  productVariantId: string | null;
  quantity: Decimal;
  tenantId?: Tenant | null;
  transactionDate: Date;
  transactionTypeId: string | null;
  unitId: string;
  updatedAt: Date;
};
