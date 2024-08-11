import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";

export type ElevatorSparePartUpdateInput = {
  elevator?: ElevatorWhereUniqueInput | null;
  price?: number | null;
  wholeSalePrice?: number | null;
};
