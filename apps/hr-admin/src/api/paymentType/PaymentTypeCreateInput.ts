import { PurchaseReturnCreateNestedManyWithoutPaymentTypesInput } from "./PurchaseReturnCreateNestedManyWithoutPaymentTypesInput";
import { PurchaseCreateNestedManyWithoutPaymentTypesInput } from "./PurchaseCreateNestedManyWithoutPaymentTypesInput";
import { SaleOrderCreateNestedManyWithoutPaymentTypesInput } from "./SaleOrderCreateNestedManyWithoutPaymentTypesInput";
import { SaleReturnCreateNestedManyWithoutPaymentTypesInput } from "./SaleReturnCreateNestedManyWithoutPaymentTypesInput";
import { SaleCreateNestedManyWithoutPaymentTypesInput } from "./SaleCreateNestedManyWithoutPaymentTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PaymentTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  purchaseReturns?: PurchaseReturnCreateNestedManyWithoutPaymentTypesInput;
  purchases?: PurchaseCreateNestedManyWithoutPaymentTypesInput;
  saleOrders?: SaleOrderCreateNestedManyWithoutPaymentTypesInput;
  saleReturns?: SaleReturnCreateNestedManyWithoutPaymentTypesInput;
  sales?: SaleCreateNestedManyWithoutPaymentTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
