import { Elevator } from "../elevator/Elevator";
import { Store } from "../store/Store";
import { JsonValue } from "type-fest";

export type MaintenanceVisit = {
  createdAt: Date;
  elevator?: Elevator;
  elevatorStatusId?: "Option1";
  id: string;
  spareParts: string | null;
  store?: Store;
  updatedAt: Date;
  visitDate: Date;
  visitDocumentImage: JsonValue;
};
