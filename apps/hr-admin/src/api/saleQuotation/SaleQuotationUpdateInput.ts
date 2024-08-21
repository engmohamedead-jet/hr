import { Decimal } from "decimal.js";
import { SaleOrderUpdateManyWithoutSaleQuotationsInput } from "./SaleOrderUpdateManyWithoutSaleQuotationsInput";
import { SaleQuotationDetailUpdateManyWithoutSaleQuotationsInput } from "./SaleQuotationDetailUpdateManyWithoutSaleQuotationsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SaleQuotationUpdateInput = {
  discount?: Decimal | null;
  discountRate?: Decimal | null;
  expectedDeliveryDate?: Date | null;
  internalMemo?: string | null;
  isActive?: boolean;
  isCancelled?: boolean | null;
  nonTaxableTotal?: Decimal;
  note?: string | null;
  referenceNumber?: string | null;
  saleOrders?: SaleOrderUpdateManyWithoutSaleQuotationsInput;
  saleQuotationDate?: Date;
  saleQuotationDetails?: SaleQuotationDetailUpdateManyWithoutSaleQuotationsInput;
  sequenceNumber?: string;
  taxRate?: Decimal;
  taxTotal?: Decimal;
  taxableTotal?: Decimal | null;
  tenantId?: TenantWhereUniqueInput | null;
  terms?: string | null;
  transactionDateTime?: Date | null;
};
