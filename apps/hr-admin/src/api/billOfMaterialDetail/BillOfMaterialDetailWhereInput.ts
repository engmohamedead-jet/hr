import { BillOfMaterialWhereUniqueInput } from "../billOfMaterial/BillOfMaterialWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { WorkCenterRoutingWhereUniqueInput } from "../workCenterRouting/WorkCenterRoutingWhereUniqueInput";

export type BillOfMaterialDetailWhereInput = {
  billOfMaterial?: BillOfMaterialWhereUniqueInput;
  costShare?: DecimalNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isManualConsumption?: BooleanNullableFilter;
  note?: StringNullableFilter;
  productId?: ProductWhereUniqueInput;
  productVariantId?: ProductVariantWhereUniqueInput;
  quantity?: DecimalNullableFilter;
  sequence?: IntNullableFilter;
  tenant?: TenantWhereUniqueInput;
  unitId?: UnitWhereUniqueInput;
  workCenterRoutingId?: WorkCenterRoutingWhereUniqueInput;
};
