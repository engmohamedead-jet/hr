import { Elevator } from "../elevator/Elevator";

export type ElevatorSparePart = {
  createdAt: Date;
  elevator?: Elevator | null;
  id: string;
  price: number | null;
  updatedAt: Date;
  wholeSalePrice: number | null;
};
