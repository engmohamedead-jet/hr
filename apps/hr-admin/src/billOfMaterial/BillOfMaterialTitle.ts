import { BillOfMaterial as TBillOfMaterial } from "../api/billOfMaterial/BillOfMaterial";

export const BILLOFMATERIAL_TITLE_FIELD = "code";

export const BillOfMaterialTitle = (record: TBillOfMaterial): string => {
  return record.code?.toString() || String(record.id);
};
