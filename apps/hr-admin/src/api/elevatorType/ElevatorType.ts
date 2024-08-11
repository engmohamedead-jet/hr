import { Elevator } from "../elevator/Elevator";

export type ElevatorType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  elevators?: Array<Elevator>;
  id: number;
  name: string;
  normalizedName: string;
  notes: string | null;
  updatedAt: Date;
};
