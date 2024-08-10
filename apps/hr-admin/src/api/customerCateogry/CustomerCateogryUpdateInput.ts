import { CustomerUpdateManyWithoutCustomerCateogriesInput } from "./CustomerUpdateManyWithoutCustomerCateogriesInput";

export type CustomerCateogryUpdateInput = {
  code?: string;
  customers?: CustomerUpdateManyWithoutCustomerCateogriesInput;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
