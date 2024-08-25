import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type TradingSummaryUpdateInput = {
  fiscalWeekId?: string | null;
  isActive?: boolean;
  note?: string | null;
  partyId?: string | null;
  price?: Decimal;
  priceTotal?: Decimal;
  productId?: string;
  productVariantId?: string | null;
  quantity?: Decimal;
  tenantId?: TenantWhereUniqueInput | null;
  transactionDate?: Date;
  transactionTypeId?: string | null;
  unitId?: string;
};
