import { ElevatorSparePartWhereInput } from "./ElevatorSparePartWhereInput";
import { ElevatorSparePartOrderByInput } from "./ElevatorSparePartOrderByInput";

export type ElevatorSparePartFindManyArgs = {
  where?: ElevatorSparePartWhereInput;
  orderBy?: Array<ElevatorSparePartOrderByInput>;
  skip?: number;
  take?: number;
};
