import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MaintenanceVisitWhereInput = {
  elevator?: ElevatorWhereUniqueInput;
  elevatorStatusId?: "Option1";
  id?: StringFilter;
  spareParts?: StringNullableFilter;
  store?: StoreWhereUniqueInput;
  visitDate?: DateTimeFilter;
  visitDocumentImage?: JsonFilter;
};
