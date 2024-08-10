import { CustomerUpdateManyWithoutCustomerTypesInput } from "./CustomerUpdateManyWithoutCustomerTypesInput";

export type CustomerTypeUpdateInput = {
  code?: string | null;
  customers?: CustomerUpdateManyWithoutCustomerTypesInput;
  description?: string | null;
  name?: string | null;
  normalizedName?: string;
  note?: string | null;
};
