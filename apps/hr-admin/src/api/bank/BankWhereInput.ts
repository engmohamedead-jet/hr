import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BankAccountListRelationFilter } from "../bankAccount/BankAccountListRelationFilter";
import { BankBranchListRelationFilter } from "../bankBranch/BankBranchListRelationFilter";
import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";

export type BankWhereInput = {
  address?: StringNullableFilter;
  bankAccounts?: BankAccountListRelationFilter;
  bankBranches?: BankBranchListRelationFilter;
  cellPhoneNumber?: StringNullableFilter;
  cityId?: CityWhereUniqueInput;
  code?: StringFilter;
  contactPhoneNumber?: StringNullableFilter;
  countryId?: CountryWhereUniqueInput;
  description?: StringNullableFilter;
  fax?: StringNullableFilter;
  homePhoneNumber?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  relationshipOfficerContactNumber?: StringNullableFilter;
  relationshipOfficerName?: StringNullableFilter;
  stateId?: StateWhereUniqueInput;
  street?: StringNullableFilter;
};
