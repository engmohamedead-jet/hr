import { Elevator } from "../elevator/Elevator";

export type DoorType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  elevators?: Array<Elevator>;
  id: number;
  name: string;
  normalizedName: string | null;
  notes: string | null;
  updatedAt: Date;
};
