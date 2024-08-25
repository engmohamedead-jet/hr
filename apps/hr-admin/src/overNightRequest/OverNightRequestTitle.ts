import { OverNightRequest as TOverNightRequest } from "../api/overNightRequest/OverNightRequest";

export const OVERNIGHTREQUEST_TITLE_FIELD = "id";

export const OverNightRequestTitle = (record: TOverNightRequest): string => {
  return record.id?.toString() || String(record.id);
};
