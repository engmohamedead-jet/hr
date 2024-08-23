import { CheckInOut as TCheckInOut } from "../api/checkInOut/CheckInOut";

export const CHECKINOUT_TITLE_FIELD = "id";

export const CheckInOutTitle = (record: TCheckInOut): string => {
  return record.id?.toString() || String(record.id);
};
