import { Attribute } from "../attribute/Attribute";

export type AttributeValue = {
  attributeId?: Attribute | null;
  createdAt: Date;
  id: string;
  note: string | null;
  updatedAt: Date;
  value: string | null;
};
