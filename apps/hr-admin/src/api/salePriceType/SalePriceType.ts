import { Customer } from "../customer/Customer";

export type SalePriceType = {
  code: string;
  createdAt: Date;
  customers?: Customer | null;
  id: number;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
