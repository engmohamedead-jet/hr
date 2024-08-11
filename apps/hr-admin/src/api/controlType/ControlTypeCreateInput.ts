import { ElevatorCreateNestedManyWithoutControlTypesInput } from "./ElevatorCreateNestedManyWithoutControlTypesInput";

export type ControlTypeCreateInput = {
  code?: string | null;
  description: string;
  elevators?: ElevatorCreateNestedManyWithoutControlTypesInput;
  isActive?: boolean | null;
  name?: string | null;
  note?: string | null;
  noted?: string | null;
};
