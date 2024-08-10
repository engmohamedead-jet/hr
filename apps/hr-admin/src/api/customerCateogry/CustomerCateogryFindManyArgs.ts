import { CustomerCateogryWhereInput } from "./CustomerCateogryWhereInput";
import { CustomerCateogryOrderByInput } from "./CustomerCateogryOrderByInput";

export type CustomerCateogryFindManyArgs = {
  where?: CustomerCateogryWhereInput;
  orderBy?: Array<CustomerCateogryOrderByInput>;
  skip?: number;
  take?: number;
};
