import { CustomerCreateNestedManyWithoutCustomerTypesInput } from "./CustomerCreateNestedManyWithoutCustomerTypesInput";

export type CustomerTypeCreateInput = {
  code?: string | null;
  customers?: CustomerCreateNestedManyWithoutCustomerTypesInput;
  description?: string | null;
  name?: string | null;
  normalizedName: string;
  note?: string | null;
};
