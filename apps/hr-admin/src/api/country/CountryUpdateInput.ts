import { BankUpdateManyWithoutCountriesInput } from "./BankUpdateManyWithoutCountriesInput";
import { StateUpdateManyWithoutCountriesInput } from "./StateUpdateManyWithoutCountriesInput";

export type CountryUpdateInput = {
  banks?: BankUpdateManyWithoutCountriesInput;
  code?: string;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  states?: StateUpdateManyWithoutCountriesInput;
};
