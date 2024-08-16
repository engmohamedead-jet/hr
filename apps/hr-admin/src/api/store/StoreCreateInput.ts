import { ProductionOrderCreateNestedManyWithoutStoresInput } from "./ProductionOrderCreateNestedManyWithoutStoresInput";
import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  addressLine1?: string | null;
  allowSale: boolean;
  cellPhoneNumber?: string | null;
  code?: string | null;
  fax?: string | null;
  homePhoneNumber?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  productionOrders?: ProductionOrderCreateNestedManyWithoutStoresInput;
  products?: ProductCreateNestedManyWithoutStoresInput;
  street?: string | null;
};
