import { InstallmentSaleFee as TInstallmentSaleFee } from "../api/installmentSaleFee/InstallmentSaleFee";

export const INSTALLMENTSALEFEE_TITLE_FIELD = "name";

export const InstallmentSaleFeeTitle = (
  record: TInstallmentSaleFee
): string => {
  return record.name?.toString() || String(record.id);
};
