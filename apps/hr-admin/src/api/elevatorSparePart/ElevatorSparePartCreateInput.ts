import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";

export type ElevatorSparePartCreateInput = {
  elevator?: ElevatorWhereUniqueInput | null;
  price?: number | null;
  wholeSalePrice?: number | null;
};
