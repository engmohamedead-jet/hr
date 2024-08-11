export type PaymentMethodCreateInput = {
  code: string;
  isDefault?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
};
