import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type SalePriceTypeCreateInput = {
  code: string;
  customers?: CustomerWhereUniqueInput | null;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
};
