import { PrintTemplateContent as TPrintTemplateContent } from "../api/printTemplateContent/PrintTemplateContent";

export const PRINTTEMPLATECONTENT_TITLE_FIELD = "display";

export const PrintTemplateContentTitle = (
  record: TPrintTemplateContent
): string => {
  return record.display?.toString() || String(record.id);
};
