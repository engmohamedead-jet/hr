export type PaymentMethod = {
  code: string;
  createdAt: Date;
  id: number;
  isDefault: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
