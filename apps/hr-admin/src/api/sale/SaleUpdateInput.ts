import { CashRepositoryWhereUniqueInput } from "../cashRepository/CashRepositoryWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { Decimal } from "decimal.js";
import { InvoiceTypeWhereUniqueInput } from "../invoiceType/InvoiceTypeWhereUniqueInput";
import { PaymentTermWhereUniqueInput } from "../paymentTerm/PaymentTermWhereUniqueInput";
import { PaymentTypeWhereUniqueInput } from "../paymentType/PaymentTypeWhereUniqueInput";
import { SaleDetailUpdateManyWithoutSalesInput } from "./SaleDetailUpdateManyWithoutSalesInput";
import { SalePaymentUpdateManyWithoutSalesInput } from "./SalePaymentUpdateManyWithoutSalesInput";
import { SalePriceTypeWhereUniqueInput } from "../salePriceType/SalePriceTypeWhereUniqueInput";
import { SaleReturnUpdateManyWithoutSalesInput } from "./SaleReturnUpdateManyWithoutSalesInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SaleUpdateInput = {
  cashRepositoryId?: CashRepositoryWhereUniqueInput;
  customerId?: CustomerWhereUniqueInput;
  discountTotal?: Decimal;
  invoiceTypeId?: InvoiceTypeWhereUniqueInput | null;
  isActive?: boolean;
  isCancelled?: boolean;
  isReplicated?: boolean;
  netTotal?: Decimal | null;
  nonTaxableTotal?: Decimal | null;
  note?: string | null;
  paid?: Decimal | null;
  paymentTerm?: PaymentTermWhereUniqueInput | null;
  paymentTypeId?: PaymentTypeWhereUniqueInput;
  referenceNumber?: string | null;
  remaining?: Decimal | null;
  saleDate?: Date;
  saleDetails?: SaleDetailUpdateManyWithoutSalesInput;
  salePayments?: SalePaymentUpdateManyWithoutSalesInput;
  salePriceTypeId?: SalePriceTypeWhereUniqueInput;
  saleReturns?: SaleReturnUpdateManyWithoutSalesInput;
  saleTotal?: Decimal;
  sequenceNumber?: string;
  storeId?: StoreWhereUniqueInput;
  tax?: Decimal | null;
  taxRate?: Decimal | null;
  taxableTotal?: Decimal | null;
  tenantId?: TenantWhereUniqueInput | null;
};
