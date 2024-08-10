import { BankType as TBankType } from "../api/bankType/BankType";

export const BANKTYPE_TITLE_FIELD = "name";

export const BankTypeTitle = (record: TBankType): string => {
  return record.name?.toString() || String(record.id);
};
