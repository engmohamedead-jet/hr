import { BillOfMaterial } from "../billOfMaterial/BillOfMaterial";
import { Decimal } from "decimal.js";
import { Product } from "../product/Product";
import { ProductVariant } from "../productVariant/ProductVariant";
import { Tenant } from "../tenant/Tenant";
import { Unit } from "../unit/Unit";
import { WorkCenterRouting } from "../workCenterRouting/WorkCenterRouting";

export type BillOfMaterialDetail = {
  billOfMaterial?: BillOfMaterial;
  costShare: Decimal | null;
  createdAt: Date;
  id: string;
  isActive: boolean;
  isManualConsumption: boolean | null;
  note: string | null;
  productId?: Product;
  productVariantId?: ProductVariant | null;
  quantity: Decimal | null;
  sequence: number | null;
  tenant?: Tenant | null;
  unitId?: Unit;
  updatedAt: Date;
  workCenterRoutingId?: WorkCenterRouting | null;
};
