import { FailureReporting as TFailureReporting } from "../api/failureReporting/FailureReporting";

export const FAILUREREPORTING_TITLE_FIELD = "id";

export const FailureReportingTitle = (record: TFailureReporting): string => {
  return record.id?.toString() || String(record.id);
};
