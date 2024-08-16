import { BillOfMaterialDetailListRelationFilter } from "../billOfMaterialDetail/BillOfMaterialDetailListRelationFilter";
import { BillOfMaterialListRelationFilter } from "../billOfMaterial/BillOfMaterialListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ProductionOrderListRelationFilter } from "../productionOrder/ProductionOrderListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type UnitWhereInput = {
  billOfMaterialDetails?: BillOfMaterialDetailListRelationFilter;
  billOfMaterials?: BillOfMaterialListRelationFilter;
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isCompound?: BooleanNullableFilter;
  isDefault?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  productionOrders?: ProductionOrderListRelationFilter;
  products?: ProductListRelationFilter;
};
