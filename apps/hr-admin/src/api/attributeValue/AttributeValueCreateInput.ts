import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";

export type AttributeValueCreateInput = {
  attributeId?: AttributeWhereUniqueInput | null;
  note?: string | null;
  value?: string | null;
};
