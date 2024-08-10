import { BankAccountCreateNestedManyWithoutBanksInput } from "./BankAccountCreateNestedManyWithoutBanksInput";
import { BankBranchCreateNestedManyWithoutBanksInput } from "./BankBranchCreateNestedManyWithoutBanksInput";
import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";

export type BankCreateInput = {
  address?: string | null;
  bankAccounts?: BankAccountCreateNestedManyWithoutBanksInput;
  bankBranches?: BankBranchCreateNestedManyWithoutBanksInput;
  cellPhoneNumber?: string | null;
  cityId?: CityWhereUniqueInput | null;
  code: string;
  contactPhoneNumber?: string | null;
  countryId?: CountryWhereUniqueInput | null;
  description?: string | null;
  fax?: string | null;
  homePhoneNumber?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  relationshipOfficerContactNumber?: string | null;
  relationshipOfficerName?: string | null;
  stateId?: StateWhereUniqueInput | null;
  street?: string | null;
};
