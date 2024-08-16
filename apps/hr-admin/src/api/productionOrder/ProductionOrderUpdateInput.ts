import { BillOfMaterialWhereUniqueInput } from "../billOfMaterial/BillOfMaterialWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderStatusWhereUniqueInput } from "../orderStatus/OrderStatusWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { Decimal } from "decimal.js";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type ProductionOrderUpdateInput = {
  billOfMaterialId?: BillOfMaterialWhereUniqueInput | null;
  code?: string | null;
  customerId?: CustomerWhereUniqueInput | null;
  deadlineDate?: Date | null;
  description?: string | null;
  finishDate?: Date | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  orderDate?: Date | null;
  orderStatusId?: OrderStatusWhereUniqueInput;
  productId?: ProductWhereUniqueInput;
  productQuantity?: Decimal | null;
  sequenceNumber?: string | null;
  startDate?: Date | null;
  storeId?: StoreWhereUniqueInput;
  unit?: UnitWhereUniqueInput;
};
