import { ProductionOrderUpdateManyWithoutStoresInput } from "./ProductionOrderUpdateManyWithoutStoresInput";
import { ProductUpdateManyWithoutStoresInput } from "./ProductUpdateManyWithoutStoresInput";
import { PurchaseReturnUpdateManyWithoutStoresInput } from "./PurchaseReturnUpdateManyWithoutStoresInput";
import { PurchaseUpdateManyWithoutStoresInput } from "./PurchaseUpdateManyWithoutStoresInput";
import { SaleReturnUpdateManyWithoutStoresInput } from "./SaleReturnUpdateManyWithoutStoresInput";
import { SaleUpdateManyWithoutStoresInput } from "./SaleUpdateManyWithoutStoresInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type StoreUpdateInput = {
  addressLine1?: string | null;
  allowSale?: boolean;
  cellPhoneNumber?: string | null;
  code?: string | null;
  fax?: string | null;
  homePhoneNumber?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  productionOrders?: ProductionOrderUpdateManyWithoutStoresInput;
  products?: ProductUpdateManyWithoutStoresInput;
  purchaseReturns?: PurchaseReturnUpdateManyWithoutStoresInput;
  purchases?: PurchaseUpdateManyWithoutStoresInput;
  saleReturns?: SaleReturnUpdateManyWithoutStoresInput;
  sales?: SaleUpdateManyWithoutStoresInput;
  street?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
