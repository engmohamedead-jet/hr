import { ProductionAvailabilityWhereInput } from "./ProductionAvailabilityWhereInput";
import { ProductionAvailabilityOrderByInput } from "./ProductionAvailabilityOrderByInput";

export type ProductionAvailabilityFindManyArgs = {
  where?: ProductionAvailabilityWhereInput;
  orderBy?: Array<ProductionAvailabilityOrderByInput>;
  skip?: number;
  take?: number;
};
