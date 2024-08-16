import { AttributeValue as TAttributeValue } from "../api/attributeValue/AttributeValue";

export const ATTRIBUTEVALUE_TITLE_FIELD = "value";

export const AttributeValueTitle = (record: TAttributeValue): string => {
  return record.value?.toString() || String(record.id);
};
