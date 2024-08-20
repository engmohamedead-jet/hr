import { CashRepositoryCreateNestedManyWithoutCashRepositoriesInput } from "./CashRepositoryCreateNestedManyWithoutCashRepositoriesInput";
import { CashRepositoryWhereUniqueInput } from "./CashRepositoryWhereUniqueInput";
import { PaymentVoucherCreateNestedManyWithoutCashRepositoriesInput } from "./PaymentVoucherCreateNestedManyWithoutCashRepositoriesInput";
import { PurchaseReturnCreateNestedManyWithoutCashRepositoriesInput } from "./PurchaseReturnCreateNestedManyWithoutCashRepositoriesInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { ReceiptVoucherCreateNestedManyWithoutCashRepositoriesInput } from "./ReceiptVoucherCreateNestedManyWithoutCashRepositoriesInput";
import { SaleOrderCreateNestedManyWithoutCashRepositoriesInput } from "./SaleOrderCreateNestedManyWithoutCashRepositoriesInput";
import { SaleReturnCreateNestedManyWithoutCashRepositoriesInput } from "./SaleReturnCreateNestedManyWithoutCashRepositoriesInput";
import { SaleCreateNestedManyWithoutCashRepositoriesInput } from "./SaleCreateNestedManyWithoutCashRepositoriesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CashRepositoryCreateInput = {
  cashRepositories?: CashRepositoryCreateNestedManyWithoutCashRepositoriesInput;
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  parentCashRepositoryId?: CashRepositoryWhereUniqueInput | null;
  paymentVouchers?: PaymentVoucherCreateNestedManyWithoutCashRepositoriesInput;
  purchaseReturns?: PurchaseReturnCreateNestedManyWithoutCashRepositoriesInput;
  purchases?: PurchaseWhereUniqueInput | null;
  receiptVouchers?: ReceiptVoucherCreateNestedManyWithoutCashRepositoriesInput;
  saleOrders?: SaleOrderCreateNestedManyWithoutCashRepositoriesInput;
  saleReturns?: SaleReturnCreateNestedManyWithoutCashRepositoriesInput;
  sales?: SaleCreateNestedManyWithoutCashRepositoriesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
