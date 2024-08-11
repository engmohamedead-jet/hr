import { ContractPeriod as TContractPeriod } from "../api/contractPeriod/ContractPeriod";

export const CONTRACTPERIOD_TITLE_FIELD = "name";

export const ContractPeriodTitle = (record: TContractPeriod): string => {
  return record.name?.toString() || String(record.id);
};
