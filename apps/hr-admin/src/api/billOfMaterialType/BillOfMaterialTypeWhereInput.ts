import { BillOfMaterialListRelationFilter } from "../billOfMaterial/BillOfMaterialListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type BillOfMaterialTypeWhereInput = {
  billOfMaterials?: BillOfMaterialListRelationFilter;
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
