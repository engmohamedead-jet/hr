import { JsonValue } from "type-fest";

export type Department = {
  createdAt: Date;
  departmentId?: Department | null;
  departments?: Array<Department>;
  description: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  noteJson: JsonValue;
  updatedAt: Date;
};
