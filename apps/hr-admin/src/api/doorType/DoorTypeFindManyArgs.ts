import { DoorTypeWhereInput } from "./DoorTypeWhereInput";
import { DoorTypeOrderByInput } from "./DoorTypeOrderByInput";

export type DoorTypeFindManyArgs = {
  where?: DoorTypeWhereInput;
  orderBy?: Array<DoorTypeOrderByInput>;
  skip?: number;
  take?: number;
};
