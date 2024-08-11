import { BarcodeType as TBarcodeType } from "../api/barcodeType/BarcodeType";

export const BARCODETYPE_TITLE_FIELD = "name";

export const BarcodeTypeTitle = (record: TBarcodeType): string => {
  return record.name?.toString() || String(record.id);
};
