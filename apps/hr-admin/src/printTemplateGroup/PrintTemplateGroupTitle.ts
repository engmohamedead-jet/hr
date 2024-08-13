import { PrintTemplateGroup as TPrintTemplateGroup } from "../api/printTemplateGroup/PrintTemplateGroup";

export const PRINTTEMPLATEGROUP_TITLE_FIELD = "name";

export const PrintTemplateGroupTitle = (
  record: TPrintTemplateGroup
): string => {
  return record.name?.toString() || String(record.id);
};
