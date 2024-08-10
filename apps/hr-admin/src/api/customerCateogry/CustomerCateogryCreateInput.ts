import { CustomerCreateNestedManyWithoutCustomerCateogriesInput } from "./CustomerCreateNestedManyWithoutCustomerCateogriesInput";

export type CustomerCateogryCreateInput = {
  code: string;
  customers?: CustomerCreateNestedManyWithoutCustomerCateogriesInput;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
};
