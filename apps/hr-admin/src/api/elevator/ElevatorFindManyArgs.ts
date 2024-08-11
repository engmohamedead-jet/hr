import { ElevatorWhereInput } from "./ElevatorWhereInput";
import { ElevatorOrderByInput } from "./ElevatorOrderByInput";

export type ElevatorFindManyArgs = {
  where?: ElevatorWhereInput;
  orderBy?: Array<ElevatorOrderByInput>;
  skip?: number;
  take?: number;
};
