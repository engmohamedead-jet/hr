import { BankUpdateManyWithoutCitiesInput } from "./BankUpdateManyWithoutCitiesInput";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";

export type CityUpdateInput = {
  banks?: BankUpdateManyWithoutCitiesInput;
  code?: string;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  stateId?: StateWhereUniqueInput;
};
