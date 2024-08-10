import { SortOrder } from "../../util/SortOrder";

export type CityOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  stateIdId?: SortOrder;
  updatedAt?: SortOrder;
};
