import { BillOfMaterialDetail as TBillOfMaterialDetail } from "../api/billOfMaterialDetail/BillOfMaterialDetail";

export const BILLOFMATERIALDETAIL_TITLE_FIELD = "id";

export const BillOfMaterialDetailTitle = (
  record: TBillOfMaterialDetail
): string => {
  return record.id?.toString() || String(record.id);
};
