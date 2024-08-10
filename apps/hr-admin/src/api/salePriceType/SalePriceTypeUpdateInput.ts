import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type SalePriceTypeUpdateInput = {
  code?: string;
  customers?: CustomerWhereUniqueInput | null;
  isDefault?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
