import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";

export type AttributeValueUpdateInput = {
  attributeId?: AttributeWhereUniqueInput | null;
  note?: string | null;
  value?: string | null;
};
