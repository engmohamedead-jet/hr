export type PaymentMethodUpdateInput = {
  code?: string;
  isDefault?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
