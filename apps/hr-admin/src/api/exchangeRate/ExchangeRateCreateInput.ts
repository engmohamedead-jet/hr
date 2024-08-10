export type ExchangeRateCreateInput = {
  code: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
};
