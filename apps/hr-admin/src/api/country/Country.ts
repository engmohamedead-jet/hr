import { Bank } from "../bank/Bank";
import { State } from "../state/State";

export type Country = {
  banks?: Array<Bank>;
  code: string;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  states?: Array<State>;
  updatedAt: Date;
};
