import { CompoundUnit } from "../compoundUnit/CompoundUnit";
import { Product } from "../product/Product";

export type Unit = {
  code: string;
  compareUnit?: CompoundUnit | null;
  compoundUnits?: Array<CompoundUnit>;
  createdAt: Date;
  description: string | null;
  id: string;
  isCompound: boolean | null;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
