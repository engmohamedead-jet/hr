import { Store } from "../store/Store";

export type StoreType = {
  code: string;
  createdAt: Date;
  description: string | null;
  id: number;
  isDefault: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  stores?: Array<Store>;
  updatedAt: Date;
};
