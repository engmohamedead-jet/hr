import { BillOfMaterialDetailCreateNestedManyWithoutBillOfMaterialsInput } from "./BillOfMaterialDetailCreateNestedManyWithoutBillOfMaterialsInput";
import { BillOfMaterialTypeWhereUniqueInput } from "../billOfMaterialType/BillOfMaterialTypeWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { ProductionOrderCreateNestedManyWithoutBillOfMaterialsInput } from "./ProductionOrderCreateNestedManyWithoutBillOfMaterialsInput";
import { Decimal } from "decimal.js";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type BillOfMaterialCreateInput = {
  billOfMaterialDetails?: BillOfMaterialDetailCreateNestedManyWithoutBillOfMaterialsInput;
  billOfMaterialTypeId: BillOfMaterialTypeWhereUniqueInput;
  code: string;
  daysToPrepareManufacturingOrder: number;
  endDate?: Date | null;
  isActive?: boolean | null;
  note?: string | null;
  productId: ProductWhereUniqueInput;
  productVariantId?: ProductVariantWhereUniqueInput | null;
  productionOrders?: ProductionOrderCreateNestedManyWithoutBillOfMaterialsInput;
  quantity?: Decimal | null;
  sequence?: number | null;
  startDate?: Date | null;
  unitId: UnitWhereUniqueInput;
};