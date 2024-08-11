import { Elevator } from "../elevator/Elevator";

export type ControlType = {
  code: string | null;
  createdAt: Date;
  description: string;
  elevators?: Array<Elevator>;
  id: number;
  isActive: boolean | null;
  name: string | null;
  note: string | null;
  noted: string | null;
  updatedAt: Date;
};
