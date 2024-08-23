import { BonusRequest as TBonusRequest } from "../api/bonusRequest/BonusRequest";

export const BONUSREQUEST_TITLE_FIELD = "id";

export const BonusRequestTitle = (record: TBonusRequest): string => {
  return record.id?.toString() || String(record.id);
};
