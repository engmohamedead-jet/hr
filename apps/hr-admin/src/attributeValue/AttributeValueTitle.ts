import { AttributeValue as TAttributeValue } from "../api/attributeValue/AttributeValue";

export const ATTRIBUTEVALUE_TITLE_FIELD = "note";

export const AttributeValueTitle = (record: TAttributeValue): string => {
  return record.note?.toString() || String(record.id);
};
