import { FailureType as TFailureType } from "../api/failureType/FailureType";

export const FAILURETYPE_TITLE_FIELD = "name";

export const FailureTypeTitle = (record: TFailureType): string => {
  return record.name?.toString() || String(record.id);
};
