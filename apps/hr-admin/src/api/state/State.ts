import { Bank } from "../bank/Bank";
import { City } from "../city/City";
import { Country } from "../country/Country";

export type State = {
  banks?: Array<Bank>;
  cities?: Array<City>;
  code: string;
  countryId?: Country;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
