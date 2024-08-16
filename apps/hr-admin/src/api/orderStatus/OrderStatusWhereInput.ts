import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductionOrderWhereUniqueInput } from "../productionOrder/ProductionOrderWhereUniqueInput";

export type OrderStatusWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  productionOrders?: ProductionOrderWhereUniqueInput;
};
