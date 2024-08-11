export type PaymentTypeCreateInput = {
  code?: string | null;
  isDefault?: boolean | null;
  name: string;
  normalizedName: string;
  notes?: string | null;
};
