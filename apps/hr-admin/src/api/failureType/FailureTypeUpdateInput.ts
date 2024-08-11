import { FailureReportingUpdateManyWithoutFailureTypesInput } from "./FailureReportingUpdateManyWithoutFailureTypesInput";

export type FailureTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  failureReportings?: FailureReportingUpdateManyWithoutFailureTypesInput;
  name?: string;
  normalizedName?: string;
  notes?: string | null;
};
