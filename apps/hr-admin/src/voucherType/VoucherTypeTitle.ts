import { VoucherType as TVoucherType } from "../api/voucherType/VoucherType";

export const VOUCHERTYPE_TITLE_FIELD = "name";

export const VoucherTypeTitle = (record: TVoucherType): string => {
  return record.name?.toString() || String(record.id);
};
