import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ElevatorSparePartWhereInput = {
  elevator?: ElevatorWhereUniqueInput;
  id?: StringFilter;
  price?: FloatNullableFilter;
  wholeSalePrice?: FloatNullableFilter;
};
