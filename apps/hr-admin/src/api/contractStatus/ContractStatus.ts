import { InstallationContract } from "../installationContract/InstallationContract";

export type ContractStatus = {
  Codec: string | null;
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  installationContracts?: InstallationContract | null;
  isActive: boolean | null;
  name: string;
  note: string | null;
  updatedAt: Date;
};
