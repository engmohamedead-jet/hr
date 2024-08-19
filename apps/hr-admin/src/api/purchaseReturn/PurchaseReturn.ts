import { CashRepository } from "../cashRepository/CashRepository";
import { Decimal } from "decimal.js";
import { InvoiceType } from "../invoiceType/InvoiceType";
import { PaymentType } from "../paymentType/PaymentType";
import { Purchase } from "../purchase/Purchase";
import { PurchasePriceType } from "../purchasePriceType/PurchasePriceType";
import { PurchaseReturnDetail } from "../purchaseReturnDetail/PurchaseReturnDetail";
import { Store } from "../store/Store";
import { Supplier } from "../supplier/Supplier";
import { Tenant } from "../tenant/Tenant";

export type PurchaseReturn = {
  cashRepositoryId?: CashRepository;
  createdAt: Date;
  discountTotal: Decimal;
  id: string;
  invoiceTypeId?: InvoiceType | null;
  isActive: boolean;
  isCancelled: boolean;
  isReplicated: boolean;
  netTotal: Decimal;
  nonTaxableTotal: Decimal | null;
  note: string | null;
  paid: Decimal;
  paymentTypeId?: PaymentType;
  purchaseId?: Purchase | null;
  purchasePriceTypeId?: PurchasePriceType;
  purchaseReturnDate: Date;
  purchaseReturnDetails?: Array<PurchaseReturnDetail>;
  purchaseReturnTotal: Decimal;
  referenceNumber: string | null;
  remaining: Decimal;
  sequenceNumber: string;
  storeId?: Store;
  supplierId?: Supplier;
  tax: Decimal | null;
  taxRate: Decimal | null;
  taxableTotal: Decimal | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};