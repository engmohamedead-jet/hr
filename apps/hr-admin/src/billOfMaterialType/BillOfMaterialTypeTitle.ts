import { BillOfMaterialType as TBillOfMaterialType } from "../api/billOfMaterialType/BillOfMaterialType";

export const BILLOFMATERIALTYPE_TITLE_FIELD = "name";

export const BillOfMaterialTypeTitle = (
  record: TBillOfMaterialType
): string => {
  return record.name?.toString() || String(record.id);
};
