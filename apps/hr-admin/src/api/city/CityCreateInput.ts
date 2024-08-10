import { BankCreateNestedManyWithoutCitiesInput } from "./BankCreateNestedManyWithoutCitiesInput";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";

export type CityCreateInput = {
  banks?: BankCreateNestedManyWithoutCitiesInput;
  code: string;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  stateId: StateWhereUniqueInput;
};
