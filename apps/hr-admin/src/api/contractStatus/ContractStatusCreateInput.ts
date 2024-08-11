import { InstallationContractWhereUniqueInput } from "../installationContract/InstallationContractWhereUniqueInput";

export type ContractStatusCreateInput = {
  Codec?: string | null;
  code?: string | null;
  description?: string | null;
  installationContracts?: InstallationContractWhereUniqueInput | null;
  isActive?: boolean | null;
  name: string;
  note?: string | null;
};
