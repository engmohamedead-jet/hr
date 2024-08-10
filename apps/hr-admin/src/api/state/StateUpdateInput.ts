import { BankUpdateManyWithoutStatesInput } from "./BankUpdateManyWithoutStatesInput";
import { CityUpdateManyWithoutStatesInput } from "./CityUpdateManyWithoutStatesInput";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type StateUpdateInput = {
  banks?: BankUpdateManyWithoutStatesInput;
  cities?: CityUpdateManyWithoutStatesInput;
  code?: string;
  countryId?: CountryWhereUniqueInput;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
