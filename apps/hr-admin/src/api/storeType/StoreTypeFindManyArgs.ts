import { StoreTypeWhereInput } from "./StoreTypeWhereInput";
import { StoreTypeOrderByInput } from "./StoreTypeOrderByInput";

export type StoreTypeFindManyArgs = {
  where?: StoreTypeWhereInput;
  orderBy?: Array<StoreTypeOrderByInput>;
  skip?: number;
  take?: number;
};
