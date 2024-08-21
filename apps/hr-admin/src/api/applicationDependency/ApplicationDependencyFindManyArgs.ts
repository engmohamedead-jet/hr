import { ApplicationDependencyWhereInput } from "./ApplicationDependencyWhereInput";
import { ApplicationDependencyOrderByInput } from "./ApplicationDependencyOrderByInput";

export type ApplicationDependencyFindManyArgs = {
  where?: ApplicationDependencyWhereInput;
  orderBy?: Array<ApplicationDependencyOrderByInput>;
  skip?: number;
  take?: number;
};
