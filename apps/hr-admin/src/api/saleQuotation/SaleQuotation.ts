import { Decimal } from "decimal.js";
import { SaleQuotationDetail } from "../saleQuotationDetail/SaleQuotationDetail";
import { Tenant } from "../tenant/Tenant";

export type SaleQuotation = {
  createdAt: Date;
  discount: Decimal | null;
  discountRate: Decimal | null;
  expectedDeliveryDate: Date | null;
  id: string;
  internalMemo: string | null;
  isActive: boolean;
  isCancelled: boolean | null;
  nonTaxableTotal: Decimal;
  note: string | null;
  referenceNumber: string | null;
  saleQuotationDate: Date;
  saleQuotationDetails?: Array<SaleQuotationDetail>;
  sequenceNumber: string;
  taxRate: Decimal;
  taxTotal: Decimal;
  taxableTotal: Decimal | null;
  tenantId?: Tenant | null;
  terms: string | null;
  transactionDateTime: Date | null;
  updatedAt: Date;
};
