import { AccountCategoryWhereUniqueInput } from "../accountCategory/AccountCategoryWhereUniqueInput";
import { AccountTypeWhereUniqueInput } from "../accountType/AccountTypeWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";

export type AccountUpdateInput = {
  accountCategory?: AccountCategoryWhereUniqueInput | null;
  accountNumber?: string | null;
  accountTypeId?: AccountTypeWhereUniqueInput;
  currencyId?: CurrencyWhereUniqueInput;
  description?: string | null;
  isActive?: boolean | null;
  isMasterAccount?: boolean;
  isUnderRevision?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  parentAccountId?: string | null;
  referenceNumber?: string | null;
};
