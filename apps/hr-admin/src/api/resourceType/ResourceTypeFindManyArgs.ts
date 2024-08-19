import { ResourceTypeWhereInput } from "./ResourceTypeWhereInput";
import { ResourceTypeOrderByInput } from "./ResourceTypeOrderByInput";

export type ResourceTypeFindManyArgs = {
  where?: ResourceTypeWhereInput;
  orderBy?: Array<ResourceTypeOrderByInput>;
  skip?: number;
  take?: number;
};
