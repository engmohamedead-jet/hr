import { CashRepository } from "../cashRepository/CashRepository";
import { Customer } from "../customer/Customer";
import { Decimal } from "decimal.js";
import { InvoiceType } from "../invoiceType/InvoiceType";
import { PaymentType } from "../paymentType/PaymentType";
import { Sale } from "../sale/Sale";
import { SalePriceType } from "../salePriceType/SalePriceType";
import { SaleReturnDetail } from "../saleReturnDetail/SaleReturnDetail";
import { Store } from "../store/Store";
import { Tenant } from "../tenant/Tenant";

export type SaleReturn = {
  cashRepositoryId?: CashRepository;
  createdAt: Date;
  customerId?: Customer;
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
  referenceNumber: string | null;
  remaining: Decimal;
  returnTotal: Decimal;
  saleId?: Sale | null;
  salePriceTyped?: SalePriceType;
  saleReturnDate: Date;
  saleReturnDetails?: Array<SaleReturnDetail>;
  sequence: string;
  storeId?: Store;
  tax: Decimal | null;
  taxRate: Decimal | null;
  taxableTotal: Decimal | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
