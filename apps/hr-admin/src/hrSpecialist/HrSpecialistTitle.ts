import { HrSpecialist as THrSpecialist } from "../api/hrSpecialist/HrSpecialist";

export const HRSPECIALIST_TITLE_FIELD = "id";

export const HrSpecialistTitle = (record: THrSpecialist): string => {
  return record.id?.toString() || String(record.id);
};
