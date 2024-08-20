import { StoreLocation as TStoreLocation } from "../api/storeLocation/StoreLocation";

export const STORELOCATION_TITLE_FIELD = "name";

export const StoreLocationTitle = (record: TStoreLocation): string => {
  return record.name?.toString() || String(record.id);
};
