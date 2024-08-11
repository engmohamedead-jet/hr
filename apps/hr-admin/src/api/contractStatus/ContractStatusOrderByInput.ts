import { SortOrder } from "../../util/SortOrder";

export type ContractStatusOrderByInput = {
  Codec?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  installationContractsId?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};
