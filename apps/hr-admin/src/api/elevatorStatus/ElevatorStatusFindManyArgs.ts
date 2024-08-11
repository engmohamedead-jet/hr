import { ElevatorStatusWhereInput } from "./ElevatorStatusWhereInput";
import { ElevatorStatusOrderByInput } from "./ElevatorStatusOrderByInput";

export type ElevatorStatusFindManyArgs = {
  where?: ElevatorStatusWhereInput;
  orderBy?: Array<ElevatorStatusOrderByInput>;
  skip?: number;
  take?: number;
};
