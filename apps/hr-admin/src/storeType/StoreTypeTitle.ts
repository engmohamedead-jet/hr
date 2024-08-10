import { StoreType as TStoreType } from "../api/storeType/StoreType";

export const STORETYPE_TITLE_FIELD = "name";

export const StoreTypeTitle = (record: TStoreType): string => {
  return record.name?.toString() || String(record.id);
};
