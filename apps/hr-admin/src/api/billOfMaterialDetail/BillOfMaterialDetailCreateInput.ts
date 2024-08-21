import { BillOfMaterialWhereUniqueInput } from "../billOfMaterial/BillOfMaterialWhereUniqueInput";
import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { WorkCenterRoutingWhereUniqueInput } from "../workCenterRouting/WorkCenterRoutingWhereUniqueInput";

export type BillOfMaterialDetailCreateInput = {
  billOfMaterial: BillOfMaterialWhereUniqueInput;
  costShare?: Decimal | null;
  isActive: boolean;
  isManualConsumption?: boolean | null;
  note?: string | null;
  productId: ProductWhereUniqueInput;
  productVariantId?: ProductVariantWhereUniqueInput | null;
  quantity?: Decimal | null;
  sequence?: number | null;
  tenant?: TenantWhereUniqueInput | null;
  unitId: UnitWhereUniqueInput;
  workCenterRoutingId?: WorkCenterRoutingWhereUniqueInput | null;
};
