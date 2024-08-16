import { ProductionOrderUpdateManyWithoutStoresInput } from "./ProductionOrderUpdateManyWithoutStoresInput";
import { ProductUpdateManyWithoutStoresInput } from "./ProductUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  addressLine1?: string | null;
  allowSale?: boolean;
  cellPhoneNumber?: string | null;
  code?: string | null;
  fax?: string | null;
  homePhoneNumber?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  productionOrders?: ProductionOrderUpdateManyWithoutStoresInput;
  products?: ProductUpdateManyWithoutStoresInput;
  street?: string | null;
};
