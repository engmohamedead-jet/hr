import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { CustomerCreateNestedManyWithoutSuppliersInput } from "./CustomerCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  address?: string | null;
  code?: string | null;
  credit?: string | null;
  currencyId?: CurrencyWhereUniqueInput | null;
  customers?: CustomerCreateNestedManyWithoutSuppliersInput;
  debit?: string | null;
  description?: string | null;
  email?: string | null;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
  phoneNumber?: string | null;
  website?: string | null;
};
