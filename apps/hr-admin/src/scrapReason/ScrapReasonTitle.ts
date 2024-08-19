import { ScrapReason as TScrapReason } from "../api/scrapReason/ScrapReason";

export const SCRAPREASON_TITLE_FIELD = "name";

export const ScrapReasonTitle = (record: TScrapReason): string => {
  return record.name?.toString() || String(record.id);
};
