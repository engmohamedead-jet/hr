import { ProductionOrder } from "../productionOrder/ProductionOrder";
import { Product } from "../product/Product";

export type Store = {
  addressLine1: string | null;
  allowSale: boolean;
  cellPhoneNumber: string | null;
  code: string | null;
  createdAt: Date;
  fax: string | null;
  homePhoneNumber: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  productionOrders?: Array<ProductionOrder>;
  products?: Array<Product>;
  street: string | null;
  updatedAt: Date;
};
