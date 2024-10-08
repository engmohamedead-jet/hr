import { BillOfMaterialDetail } from "../billOfMaterialDetail/BillOfMaterialDetail";
import { BillOfMaterialType } from "../billOfMaterialType/BillOfMaterialType";
import { Product } from "../product/Product";
import { ProductVariant } from "../productVariant/ProductVariant";
import { ProductionOrder } from "../productionOrder/ProductionOrder";
import { Decimal } from "decimal.js";
import { Tenant } from "../tenant/Tenant";
import { Unit } from "../unit/Unit";

export type BillOfMaterial = {
  billOfMaterialDetails?: Array<BillOfMaterialDetail>;
  billOfMaterialTypeId?: BillOfMaterialType;
  code: string;
  createdAt: Date;
  daysToPrepareManufacturingOrder: number;
  endDate: Date | null;
  id: string;
  isActive: boolean;
  note: string | null;
  productId?: Product;
  productVariantId?: ProductVariant | null;
  productionOrders?: Array<ProductionOrder>;
  quantity: Decimal | null;
  sequence: number | null;
  startDate: Date | null;
  tenantId?: Tenant | null;
  unitId?: Unit;
  updatedAt: Date;
};
