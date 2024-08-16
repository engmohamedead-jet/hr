import { BillOfMaterialDetailUpdateManyWithoutBillOfMaterialsInput } from "./BillOfMaterialDetailUpdateManyWithoutBillOfMaterialsInput";
import { BillOfMaterialTypeWhereUniqueInput } from "../billOfMaterialType/BillOfMaterialTypeWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { ProductionOrderUpdateManyWithoutBillOfMaterialsInput } from "./ProductionOrderUpdateManyWithoutBillOfMaterialsInput";
import { Decimal } from "decimal.js";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type BillOfMaterialUpdateInput = {
  billOfMaterialDetails?: BillOfMaterialDetailUpdateManyWithoutBillOfMaterialsInput;
  billOfMaterialTypeId?: BillOfMaterialTypeWhereUniqueInput;
  code?: string;
  daysToPrepareManufacturingOrder?: number;
  endDate?: Date | null;
  isActive?: boolean | null;
  note?: string | null;
  productId?: ProductWhereUniqueInput;
  productVariantId?: ProductVariantWhereUniqueInput | null;
  productionOrders?: ProductionOrderUpdateManyWithoutBillOfMaterialsInput;
  quantity?: Decimal | null;
  sequence?: number | null;
  startDate?: Date | null;
  unitId?: UnitWhereUniqueInput;
};