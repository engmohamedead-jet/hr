import { CashRepository } from "../cashRepository/CashRepository";
import { Customer } from "../customer/Customer";
import { Decimal } from "decimal.js";
import { InvoiceType } from "../invoiceType/InvoiceType";
import { PaymentType } from "../paymentType/PaymentType";
import { SaleDetail } from "../saleDetail/SaleDetail";
import { SalePriceType } from "../salePriceType/SalePriceType";
import { SaleReturn } from "../saleReturn/SaleReturn";
import { Store } from "../store/Store";
import { Tenant } from "../tenant/Tenant";

export type Sale = {
  cashRepositoryId?: CashRepository;
  createdAt: Date;
  customerId?: Customer;
  discountTotal: Decimal;
  id: string;
  invoiceTypeId?: InvoiceType | null;
  isActive: boolean;
  isCancelled: boolean;
  isReplicated: boolean;
  netTotal: Decimal | null;
  nonTaxableTotal: Decimal | null;
  note: string | null;
  paid: Decimal | null;
  paymentTypeId?: PaymentType;
  referenceNumber: string | null;
  remaining: Decimal | null;
  saleDate: Date;
  saleDetails?: Array<SaleDetail>;
  salePriceTypeId?: SalePriceType;
  saleReturns?: Array<SaleReturn>;
  saleTotal: Decimal;
  sequenceNumber: string;
  storeId?: Store;
  tax: Decimal | null;
  taxRate: Decimal | null;
  taxableTotal: Decimal | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
