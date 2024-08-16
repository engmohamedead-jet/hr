import { BillOfMaterialWhereUniqueInput } from "../billOfMaterial/BillOfMaterialWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderStatusWhereUniqueInput } from "../orderStatus/OrderStatusWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type ProductionOrderWhereInput = {
  billOfMaterialId?: BillOfMaterialWhereUniqueInput;
  code?: StringNullableFilter;
  customerId?: CustomerWhereUniqueInput;
  deadlineDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  finishDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  orderDate?: DateTimeNullableFilter;
  orderStatusId?: OrderStatusWhereUniqueInput;
  productId?: ProductWhereUniqueInput;
  productQuantity?: DecimalNullableFilter;
  sequenceNumber?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  storeId?: StoreWhereUniqueInput;
  unit?: UnitWhereUniqueInput;
};