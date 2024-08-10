import { BankAccount } from "../bankAccount/BankAccount";
import { BankBranch } from "../bankBranch/BankBranch";
import { City } from "../city/City";
import { Country } from "../country/Country";
import { State } from "../state/State";

export type Bank = {
  address: string | null;
  bankAccounts?: Array<BankAccount>;
  bankBranches?: Array<BankBranch>;
  cellPhoneNumber: string | null;
  cityId?: City | null;
  code: string;
  contactPhoneNumber: string | null;
  countryId?: Country | null;
  createdAt: Date;
  description: string | null;
  fax: string | null;
  homePhoneNumber: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  relationshipOfficerContactNumber: string | null;
  relationshipOfficerName: string | null;
  stateId?: State | null;
  street: string | null;
  updatedAt: Date;
};
