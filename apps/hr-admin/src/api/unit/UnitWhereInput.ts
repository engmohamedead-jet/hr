import { StringFilter } from "../../util/StringFilter";
import { CompoundUnitWhereUniqueInput } from "../compoundUnit/CompoundUnitWhereUniqueInput";
import { CompoundUnitListRelationFilter } from "../compoundUnit/CompoundUnitListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type UnitWhereInput = {
  code?: StringFilter;
  compareUnit?: CompoundUnitWhereUniqueInput;
  compoundUnits?: CompoundUnitListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isCompound?: BooleanNullableFilter;
  isDefault?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  products?: ProductListRelationFilter;
};
