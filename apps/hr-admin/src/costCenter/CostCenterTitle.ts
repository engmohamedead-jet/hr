import { CostCenter as TCostCenter } from "../api/costCenter/CostCenter";

export const COSTCENTER_TITLE_FIELD = "name";

export const CostCenterTitle = (record: TCostCenter): string => {
  return record.name?.toString() || String(record.id);
};
