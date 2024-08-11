import { CustomerElevatorWhereInput } from "./CustomerElevatorWhereInput";
import { CustomerElevatorOrderByInput } from "./CustomerElevatorOrderByInput";

export type CustomerElevatorFindManyArgs = {
  where?: CustomerElevatorWhereInput;
  orderBy?: Array<CustomerElevatorOrderByInput>;
  skip?: number;
  take?: number;
};
