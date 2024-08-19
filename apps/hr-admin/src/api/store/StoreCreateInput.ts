import { ProductionOrderCreateNestedManyWithoutStoresInput } from "./ProductionOrderCreateNestedManyWithoutStoresInput";
import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";
import { PurchaseReturnCreateNestedManyWithoutStoresInput } from "./PurchaseReturnCreateNestedManyWithoutStoresInput";
import { PurchaseCreateNestedManyWithoutStoresInput } from "./PurchaseCreateNestedManyWithoutStoresInput";
import { SaleReturnCreateNestedManyWithoutStoresInput } from "./SaleReturnCreateNestedManyWithoutStoresInput";
import { SaleCreateNestedManyWithoutStoresInput } from "./SaleCreateNestedManyWithoutStoresInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type StoreCreateInput = {
  addressLine1?: string | null;
  allowSale: boolean;
  cellPhoneNumber?: string | null;
  code?: string | null;
  fax?: string | null;
  homePhoneNumber?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  productionOrders?: ProductionOrderCreateNestedManyWithoutStoresInput;
  products?: ProductCreateNestedManyWithoutStoresInput;
  purchaseReturns?: PurchaseReturnCreateNestedManyWithoutStoresInput;
  purchases?: PurchaseCreateNestedManyWithoutStoresInput;
  saleReturns?: SaleReturnCreateNestedManyWithoutStoresInput;
  sales?: SaleCreateNestedManyWithoutStoresInput;
  street?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
