import { CashRepositoryWhereUniqueInput } from "../cashRepository/CashRepositoryWhereUniqueInput";
import { Decimal } from "decimal.js";
import { InvoiceTypeWhereUniqueInput } from "../invoiceType/InvoiceTypeWhereUniqueInput";
import { PaymentTermWhereUniqueInput } from "../paymentTerm/PaymentTermWhereUniqueInput";
import { PaymentTypeWhereUniqueInput } from "../paymentType/PaymentTypeWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { PurchasePriceTypeWhereUniqueInput } from "../purchasePriceType/PurchasePriceTypeWhereUniqueInput";
import { PurchaseReturnDetailCreateNestedManyWithoutPurchaseReturnsInput } from "./PurchaseReturnDetailCreateNestedManyWithoutPurchaseReturnsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PurchaseReturnCreateInput = {
  cashRepositoryId: CashRepositoryWhereUniqueInput;
  discountTotal: Decimal;
  invoiceTypeId?: InvoiceTypeWhereUniqueInput | null;
  isActive: boolean;
  isCancelled: boolean;
  isReplicated: boolean;
  netTotal: Decimal;
  nonTaxableTotal?: Decimal | null;
  note?: string | null;
  paid: Decimal;
  paymentTermId?: PaymentTermWhereUniqueInput | null;
  paymentTypeId: PaymentTypeWhereUniqueInput;
  purchaseId?: PurchaseWhereUniqueInput | null;
  purchasePriceTypeId: PurchasePriceTypeWhereUniqueInput;
  purchaseReturnDate: Date;
  purchaseReturnDetails?: PurchaseReturnDetailCreateNestedManyWithoutPurchaseReturnsInput;
  purchaseReturnTotal: Decimal;
  referenceNumber?: string | null;
  remaining: Decimal;
  sequenceNumber: string;
  storeId: StoreWhereUniqueInput;
  supplierId: SupplierWhereUniqueInput;
  tax?: Decimal | null;
  taxRate?: Decimal | null;
  taxableTotal?: Decimal | null;
  tenantId?: TenantWhereUniqueInput | null;
};
