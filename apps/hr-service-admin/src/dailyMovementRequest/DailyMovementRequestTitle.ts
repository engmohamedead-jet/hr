import { DailyMovementRequest as TDailyMovementRequest } from "../api/dailyMovementRequest/DailyMovementRequest";

export const DAILYMOVEMENTREQUEST_TITLE_FIELD = "id";

export const DailyMovementRequestTitle = (
  record: TDailyMovementRequest
): string => {
  return record.id?.toString() || String(record.id);
};
