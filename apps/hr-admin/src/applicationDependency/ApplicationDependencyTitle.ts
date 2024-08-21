import { ApplicationDependency as TApplicationDependency } from "../api/applicationDependency/ApplicationDependency";

export const APPLICATIONDEPENDENCY_TITLE_FIELD = "name";

export const ApplicationDependencyTitle = (
  record: TApplicationDependency
): string => {
  return record.name?.toString() || String(record.id);
};
