import { PurchaseReturnUpdateManyWithoutPaymentTypesInput } from "./PurchaseReturnUpdateManyWithoutPaymentTypesInput";
import { PurchaseUpdateManyWithoutPaymentTypesInput } from "./PurchaseUpdateManyWithoutPaymentTypesInput";
import { SaleOrderUpdateManyWithoutPaymentTypesInput } from "./SaleOrderUpdateManyWithoutPaymentTypesInput";
import { SaleReturnUpdateManyWithoutPaymentTypesInput } from "./SaleReturnUpdateManyWithoutPaymentTypesInput";
import { SaleUpdateManyWithoutPaymentTypesInput } from "./SaleUpdateManyWithoutPaymentTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PaymentTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  isDefault?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  purchaseReturns?: PurchaseReturnUpdateManyWithoutPaymentTypesInput;
  purchases?: PurchaseUpdateManyWithoutPaymentTypesInput;
  saleOrders?: SaleOrderUpdateManyWithoutPaymentTypesInput;
  saleReturns?: SaleReturnUpdateManyWithoutPaymentTypesInput;
  sales?: SaleUpdateManyWithoutPaymentTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
