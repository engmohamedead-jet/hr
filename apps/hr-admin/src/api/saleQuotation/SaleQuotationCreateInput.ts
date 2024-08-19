import { Decimal } from "decimal.js";
import { SaleQuotationDetailCreateNestedManyWithoutSaleQuotationsInput } from "./SaleQuotationDetailCreateNestedManyWithoutSaleQuotationsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SaleQuotationCreateInput = {
  discount?: Decimal | null;
  discountRate?: Decimal | null;
  expectedDeliveryDate?: Date | null;
  internalMemo?: string | null;
  isActive: boolean;
  isCancelled?: boolean | null;
  nonTaxableTotal: Decimal;
  note?: string | null;
  referenceNumber?: string | null;
  saleQuotationDate: Date;
  saleQuotationDetails?: SaleQuotationDetailCreateNestedManyWithoutSaleQuotationsInput;
  sequenceNumber: string;
  taxRate: Decimal;
  taxTotal: Decimal;
  taxableTotal?: Decimal | null;
  tenantId?: TenantWhereUniqueInput | null;
  terms?: string | null;
  transactionDateTime?: Date | null;
};
