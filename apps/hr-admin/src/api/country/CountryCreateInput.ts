import { BankCreateNestedManyWithoutCountriesInput } from "./BankCreateNestedManyWithoutCountriesInput";
import { StateCreateNestedManyWithoutCountriesInput } from "./StateCreateNestedManyWithoutCountriesInput";

export type CountryCreateInput = {
  banks?: BankCreateNestedManyWithoutCountriesInput;
  code: string;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  states?: StateCreateNestedManyWithoutCountriesInput;
};
