import { InstallationContractWhereInput } from "./InstallationContractWhereInput";
import { InstallationContractOrderByInput } from "./InstallationContractOrderByInput";

export type InstallationContractFindManyArgs = {
  where?: InstallationContractWhereInput;
  orderBy?: Array<InstallationContractOrderByInput>;
  skip?: number;
  take?: number;
};
