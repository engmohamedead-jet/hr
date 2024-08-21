import { SaleTeamWhereInput } from "./SaleTeamWhereInput";
import { SaleTeamOrderByInput } from "./SaleTeamOrderByInput";

export type SaleTeamFindManyArgs = {
  where?: SaleTeamWhereInput;
  orderBy?: Array<SaleTeamOrderByInput>;
  skip?: number;
  take?: number;
};
