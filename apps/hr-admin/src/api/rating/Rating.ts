import { Customer } from "../customer/Customer";

export type Rating = {
  code: string;
  createdAt: Date;
  customers?: Array<Customer>;
  guarantorRatingI?: Array<Customer>;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
