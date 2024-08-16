import { BillOfMaterial } from "../billOfMaterial/BillOfMaterial";

export type BillOfMaterialType = {
  billOfMaterials?: Array<BillOfMaterial>;
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
