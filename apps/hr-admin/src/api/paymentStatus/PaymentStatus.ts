export type PaymentStatus = {
  code: string;
  createdAt: Date;
  description: string | null;
  id: number;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
