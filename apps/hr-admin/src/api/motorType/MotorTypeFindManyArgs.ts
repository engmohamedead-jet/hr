import { MotorTypeWhereInput } from "./MotorTypeWhereInput";
import { MotorTypeOrderByInput } from "./MotorTypeOrderByInput";

export type MotorTypeFindManyArgs = {
  where?: MotorTypeWhereInput;
  orderBy?: Array<MotorTypeOrderByInput>;
  skip?: number;
  take?: number;
};
