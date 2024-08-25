import { JobTitle as TJobTitle } from "../api/jobTitle/JobTitle";

export const JOBTITLE_TITLE_FIELD = "name";

export const JobTitleTitle = (record: TJobTitle): string => {
  return record.name?.toString() || String(record.id);
};
