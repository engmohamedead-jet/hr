import { SaleTeam as TSaleTeam } from "../api/saleTeam/SaleTeam";

export const SALETEAM_TITLE_FIELD = "name";

export const SaleTeamTitle = (record: TSaleTeam): string => {
  return record.name?.toString() || String(record.id);
};
