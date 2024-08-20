import { CashRepositoryUpdateManyWithoutCashRepositoriesInput } from "./CashRepositoryUpdateManyWithoutCashRepositoriesInput";
import { CashRepositoryWhereUniqueInput } from "./CashRepositoryWhereUniqueInput";
import { PaymentVoucherUpdateManyWithoutCashRepositoriesInput } from "./PaymentVoucherUpdateManyWithoutCashRepositoriesInput";
import { PurchaseReturnUpdateManyWithoutCashRepositoriesInput } from "./PurchaseReturnUpdateManyWithoutCashRepositoriesInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { ReceiptVoucherUpdateManyWithoutCashRepositoriesInput } from "./ReceiptVoucherUpdateManyWithoutCashRepositoriesInput";
import { SaleOrderUpdateManyWithoutCashRepositoriesInput } from "./SaleOrderUpdateManyWithoutCashRepositoriesInput";
import { SaleReturnUpdateManyWithoutCashRepositoriesInput } from "./SaleReturnUpdateManyWithoutCashRepositoriesInput";
import { SaleUpdateManyWithoutCashRepositoriesInput } from "./SaleUpdateManyWithoutCashRepositoriesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CashRepositoryUpdateInput = {
  cashRepositories?: CashRepositoryUpdateManyWithoutCashRepositoriesInput;
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  parentCashRepositoryId?: CashRepositoryWhereUniqueInput | null;
  paymentVouchers?: PaymentVoucherUpdateManyWithoutCashRepositoriesInput;
  purchaseReturns?: PurchaseReturnUpdateManyWithoutCashRepositoriesInput;
  purchases?: PurchaseWhereUniqueInput | null;
  receiptVouchers?: ReceiptVoucherUpdateManyWithoutCashRepositoriesInput;
  saleOrders?: SaleOrderUpdateManyWithoutCashRepositoriesInput;
  saleReturns?: SaleReturnUpdateManyWithoutCashRepositoriesInput;
  sales?: SaleUpdateManyWithoutCashRepositoriesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
