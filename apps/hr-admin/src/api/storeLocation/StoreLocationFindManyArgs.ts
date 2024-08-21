import { StoreLocationWhereInput } from "./StoreLocationWhereInput";
import { StoreLocationOrderByInput } from "./StoreLocationOrderByInput";

export type StoreLocationFindManyArgs = {
  where?: StoreLocationWhereInput;
  orderBy?: Array<StoreLocationOrderByInput>;
  skip?: number;
  take?: number;
};
