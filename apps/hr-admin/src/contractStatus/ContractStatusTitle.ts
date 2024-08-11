import { ContractStatus as TContractStatus } from "../api/contractStatus/ContractStatus";

export const CONTRACTSTATUS_TITLE_FIELD = "name";

export const ContractStatusTitle = (record: TContractStatus): string => {
  return record.name?.toString() || String(record.id);
};
