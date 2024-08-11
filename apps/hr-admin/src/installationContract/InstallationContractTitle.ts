import { InstallationContract as TInstallationContract } from "../api/installationContract/InstallationContract";

export const INSTALLATIONCONTRACT_TITLE_FIELD = "address";

export const InstallationContractTitle = (
  record: TInstallationContract
): string => {
  return record.address?.toString() || String(record.id);
};
