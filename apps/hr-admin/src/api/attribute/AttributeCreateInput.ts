import { AttributeValueCreateNestedManyWithoutAttributesInput } from "./AttributeValueCreateNestedManyWithoutAttributesInput";

export type AttributeCreateInput = {
  attributeValues?: AttributeValueCreateNestedManyWithoutAttributesInput;
  code?: string | null;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
};
