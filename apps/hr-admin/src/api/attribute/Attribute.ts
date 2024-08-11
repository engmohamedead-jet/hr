import { AttributeValue } from "../attributeValue/AttributeValue";

export type Attribute = {
  attributeValues?: Array<AttributeValue>;
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
