import { BankCreateNestedManyWithoutStatesInput } from "./BankCreateNestedManyWithoutStatesInput";
import { CityCreateNestedManyWithoutStatesInput } from "./CityCreateNestedManyWithoutStatesInput";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type StateCreateInput = {
  banks?: BankCreateNestedManyWithoutStatesInput;
  cities?: CityCreateNestedManyWithoutStatesInput;
  code: string;
  countryId: CountryWhereUniqueInput;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
};
