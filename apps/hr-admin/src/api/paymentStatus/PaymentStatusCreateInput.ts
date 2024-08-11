export type PaymentStatusCreateInput = {
  code: string;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
};