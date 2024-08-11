import { AttributeValueUpdateManyWithoutAttributesInput } from "./AttributeValueUpdateManyWithoutAttributesInput";

export type AttributeUpdateInput = {
  attributeValues?: AttributeValueUpdateManyWithoutAttributesInput;
  code?: string | null;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
