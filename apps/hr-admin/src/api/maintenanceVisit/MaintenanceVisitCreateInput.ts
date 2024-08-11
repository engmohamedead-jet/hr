import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type MaintenanceVisitCreateInput = {
  elevator: ElevatorWhereUniqueInput;
  elevatorStatusId: "Option1";
  spareParts?: string | null;
  store: StoreWhereUniqueInput;
  visitDate: Date;
  visitDocumentImage?: InputJsonValue;
};