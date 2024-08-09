import { Employee } from "../employee/Employee";
import { JsonValue } from "type-fest";

export type Department = {
  createdAt: Date;
  departments?: Department | null;
  description: string | null;
  employees?: Array<Employee>;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  noteJson: JsonValue;
  parentDepartmentId?: Department | null;
  updatedAt: Date;
};
