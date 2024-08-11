export type BrandCreateInput = {
  code?: string | null;
  description?: string | null;
  isDefault?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
};
