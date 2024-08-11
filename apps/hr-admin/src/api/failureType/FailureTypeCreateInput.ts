import { FailureReportingCreateNestedManyWithoutFailureTypesInput } from "./FailureReportingCreateNestedManyWithoutFailureTypesInput";

export type FailureTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  failureReportings?: FailureReportingCreateNestedManyWithoutFailureTypesInput;
  name: string;
  normalizedName: string;
  notes?: string | null;
};
