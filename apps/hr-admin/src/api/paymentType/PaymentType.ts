export type PaymentType = {
  code: string | null;
  createdAt: Date;
  id: number;
  isDefault: boolean | null;
  name: string;
  normalizedName: string;
  notes: string | null;
  updatedAt: Date;
};
