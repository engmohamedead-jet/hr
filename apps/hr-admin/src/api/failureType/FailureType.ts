import { FailureReporting } from "../failureReporting/FailureReporting";

export type FailureType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  failureReportings?: Array<FailureReporting>;
  id: number;
  name: string;
  normalizedName: string;
  notes: string | null;
  updatedAt: Date;
};
