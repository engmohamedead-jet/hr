import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";
import { InstallmentSaleFeeWhereUniqueInput } from "../installmentSaleFee/InstallmentSaleFeeWhereUniqueInput";
import { PurchaseReturnCreateNestedManyWithoutPaymentTermsInput } from "./PurchaseReturnCreateNestedManyWithoutPaymentTermsInput";
import { PurchaseCreateNestedManyWithoutPaymentTermsInput } from "./PurchaseCreateNestedManyWithoutPaymentTermsInput";
import { SaleReturnCreateNestedManyWithoutPaymentTermsInput } from "./SaleReturnCreateNestedManyWithoutPaymentTermsInput";
import { SaleCreateNestedManyWithoutPaymentTermsInput } from "./SaleCreateNestedManyWithoutPaymentTermsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PaymentTermCreateInput = {
  code?: string | null;
  description?: string | null;
  dueDays: number;
  duePeriodId?: PeriodWhereUniqueInput | null;
  gracePeriod: number;
  installmentSaleFeeId?: InstallmentSaleFeeWhereUniqueInput | null;
  installmentSaleFeePostingPeriod?: PeriodWhereUniqueInput | null;
  isActive: boolean;
  isDefault?: boolean | null;
  isDueOnDate?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  purchaseReturns?: PurchaseReturnCreateNestedManyWithoutPaymentTermsInput;
  purchases?: PurchaseCreateNestedManyWithoutPaymentTermsInput;
  saleReturns?: SaleReturnCreateNestedManyWithoutPaymentTermsInput;
  sales?: SaleCreateNestedManyWithoutPaymentTermsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
