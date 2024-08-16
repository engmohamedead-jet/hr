import { BillOfMaterialDetail } from "../billOfMaterialDetail/BillOfMaterialDetail";
import { BillOfMaterial } from "../billOfMaterial/BillOfMaterial";
import { ProductionOrder } from "../productionOrder/ProductionOrder";
import { Product } from "../product/Product";

export type Unit = {
  billOfMaterialDetails?: Array<BillOfMaterialDetail>;
  billOfMaterials?: Array<BillOfMaterial>;
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isCompound: boolean | null;
  isDefault: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  productionOrders?: Array<ProductionOrder>;
  products?: Array<Product>;
  updatedAt: Date;
};
