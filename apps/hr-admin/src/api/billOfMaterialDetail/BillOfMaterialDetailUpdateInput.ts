import { BillOfMaterialWhereUniqueInput } from "../billOfMaterial/BillOfMaterialWhereUniqueInput";
import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { WorkCenterRoutingWhereUniqueInput } from "../workCenterRouting/WorkCenterRoutingWhereUniqueInput";

export type BillOfMaterialDetailUpdateInput = {
  billOfMaterial?: BillOfMaterialWhereUniqueInput;
  costShare?: Decimal | null;
  isActive?: boolean;
  isManualConsumption?: boolean | null;
  note?: string | null;
  productId?: ProductWhereUniqueInput;
  productVariantId?: ProductVariantWhereUniqueInput | null;
  quantity?: Decimal | null;
  sequence?: number | null;
  unitId?: UnitWhereUniqueInput;
  workCenterRoutingId?: WorkCenterRoutingWhereUniqueInput | null;
};
