import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";
import { InstallmentSaleFeeWhereUniqueInput } from "../installmentSaleFee/InstallmentSaleFeeWhereUniqueInput";
import { PurchaseReturnUpdateManyWithoutPaymentTermsInput } from "./PurchaseReturnUpdateManyWithoutPaymentTermsInput";
import { PurchaseUpdateManyWithoutPaymentTermsInput } from "./PurchaseUpdateManyWithoutPaymentTermsInput";
import { SaleReturnUpdateManyWithoutPaymentTermsInput } from "./SaleReturnUpdateManyWithoutPaymentTermsInput";
import { SaleUpdateManyWithoutPaymentTermsInput } from "./SaleUpdateManyWithoutPaymentTermsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PaymentTermUpdateInput = {
  code?: string | null;
  description?: string | null;
  dueDays?: number;
  duePeriodId?: PeriodWhereUniqueInput | null;
  gracePeriod?: number;
  installmentSaleFeeId?: InstallmentSaleFeeWhereUniqueInput | null;
  installmentSaleFeePostingPeriod?: PeriodWhereUniqueInput | null;
  isActive?: boolean;
  isDefault?: boolean | null;
  isDueOnDate?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  purchaseReturns?: PurchaseReturnUpdateManyWithoutPaymentTermsInput;
  purchases?: PurchaseUpdateManyWithoutPaymentTermsInput;
  saleReturns?: SaleReturnUpdateManyWithoutPaymentTermsInput;
  sales?: SaleUpdateManyWithoutPaymentTermsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
