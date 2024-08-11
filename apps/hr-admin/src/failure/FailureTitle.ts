import { Failure as TFailure } from "../api/failure/Failure";

export const FAILURE_TITLE_FIELD = "failureReport";

export const FailureTitle = (record: TFailure): string => {
  return record.failureReport?.toString() || String(record.id);
};
