import { PaymentTerm } from "../paymentTerm/PaymentTerm";

export type Period = {
  code: string;
  createdAt: Date;
  description: string | null;
  id: string;
  installmentSaleFeePostingPeriod?: PaymentTerm | null;
  name: string;
  normalizedName: string;
  note: string | null;
  paymentTerms?: PaymentTerm | null;
  updatedAt: Date;
};
