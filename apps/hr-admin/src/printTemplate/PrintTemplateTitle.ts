import { PrintTemplate as TPrintTemplate } from "../api/printTemplate/PrintTemplate";

export const PRINTTEMPLATE_TITLE_FIELD = "name";

export const PrintTemplateTitle = (record: TPrintTemplate): string => {
  return record.name?.toString() || String(record.id);
};
